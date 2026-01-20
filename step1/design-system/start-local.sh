#!/bin/bash

# Design System 로컬 실행 스크립트
# 사용법: ./start-local.sh

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# 설정
STORYBOOK_PORT=6006
VITE_PORT=5173

# 색상 정의
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# 기존 프로세스 종료
kill_existing_process() {
    local PORT=$1
    log_info "포트 $PORT 사용 중인 프로세스 확인 중..."

    # 포트를 사용 중인 PID 찾기
    local PIDS=$(lsof -ti :$PORT 2>/dev/null || true)

    if [ -n "$PIDS" ]; then
        log_warn "포트 $PORT 를 사용 중인 프로세스 발견: $PIDS"

        for PID in $PIDS; do
            # 프로세스 정보 출력
            local PROC_INFO=$(ps -p $PID -o comm= 2>/dev/null || echo "unknown")
            log_info "프로세스 종료 중: PID $PID ($PROC_INFO)"

            # SIGTERM으로 먼저 시도
            kill $PID 2>/dev/null || true
        done

        # 프로세스 종료 대기 (최대 5초)
        for i in {1..10}; do
            if ! lsof -ti :$PORT &>/dev/null; then
                log_success "기존 프로세스 종료 완료"
                break
            fi
            sleep 0.5
        done

        # 아직 살아있으면 강제 종료
        PIDS=$(lsof -ti :$PORT 2>/dev/null || true)
        if [ -n "$PIDS" ]; then
            log_warn "강제 종료 시도 중..."
            for PID in $PIDS; do
                kill -9 $PID 2>/dev/null || true
            done
            sleep 1
        fi
    else
        log_success "포트 $PORT 사용 가능"
    fi
}

# 캐시 정리
clear_cache() {
    log_info "캐시 정리 중..."

    local CACHE_CLEARED=false

    # Vite 캐시
    if [ -d "node_modules/.vite" ]; then
        log_info "Vite 캐시 삭제 중..."
        rm -rf node_modules/.vite
        CACHE_CLEARED=true
    fi

    # node_modules/.cache (babel, eslint 등 캐시)
    if [ -d "node_modules/.cache" ]; then
        log_info "node_modules/.cache 삭제 중..."
        rm -rf node_modules/.cache
        CACHE_CLEARED=true
    fi

    # TypeScript 빌드 캐시
    if [ -d "tsconfig.tsbuildinfo" ] || [ -f "tsconfig.tsbuildinfo" ]; then
        log_info "TypeScript 빌드 캐시 삭제 중..."
        rm -rf tsconfig.tsbuildinfo
        CACHE_CLEARED=true
    fi

    # ESLint 캐시
    if [ -f ".eslintcache" ]; then
        log_info "ESLint 캐시 삭제 중..."
        rm -f .eslintcache
        CACHE_CLEARED=true
    fi

    # Storybook 캐시
    if [ -d "node_modules/.cache/storybook" ]; then
        log_info "Storybook 캐시 삭제 중..."
        rm -rf node_modules/.cache/storybook
        CACHE_CLEARED=true
    fi

    # dist 폴더
    if [ -d "dist" ]; then
        log_info "dist 폴더 삭제 중..."
        rm -rf dist
        CACHE_CLEARED=true
    fi

    if [ "$CACHE_CLEARED" = true ]; then
        log_success "캐시 정리 완료"
    else
        log_success "정리할 캐시 없음"
    fi
}

# Node.js 버전 체크
check_node() {
    log_info "Node.js 버전 확인 중..."

    if ! command -v node &> /dev/null; then
        log_error "Node.js가 설치되어 있지 않습니다."
        log_info "brew install node 또는 https://nodejs.org 에서 설치해주세요."
        exit 1
    fi

    NODE_VERSION=$(node -v | sed 's/v//')
    NODE_MAJOR=$(echo "$NODE_VERSION" | cut -d. -f1)

    if [ "$NODE_MAJOR" -lt 18 ]; then
        log_error "Node.js 18 이상이 필요합니다. (현재: v$NODE_VERSION)"
        exit 1
    fi

    log_success "Node.js v$NODE_VERSION 확인됨"
}

# npm 버전 체크
check_npm() {
    log_info "npm 버전 확인 중..."

    if ! command -v npm &> /dev/null; then
        log_error "npm이 설치되어 있지 않습니다."
        exit 1
    fi

    NPM_VERSION=$(npm -v)
    log_success "npm v$NPM_VERSION 확인됨"
}

# 패키지 의존성 확인 및 설치
check_dependencies() {
    log_info "패키지 의존성 확인 중..."

    # node_modules 폴더 존재 여부 확인
    if [ ! -d "node_modules" ]; then
        log_warn "node_modules가 없습니다. 패키지 설치를 시작합니다..."
        npm install
        log_success "패키지 설치 완료"
        return
    fi

    # package.json과 package-lock.json 비교하여 업데이트 필요 여부 확인
    if [ "package.json" -nt "node_modules/.package-lock.json" ] 2>/dev/null || \
       [ "package-lock.json" -nt "node_modules/.package-lock.json" ] 2>/dev/null; then
        log_warn "패키지 변경이 감지되었습니다. 업데이트를 시작합니다..."
        npm install
        log_success "패키지 업데이트 완료"
    else
        log_success "패키지가 최신 상태입니다"
    fi
}

# 디자인 토큰 빌드
build_tokens() {
    log_info "디자인 토큰 빌드 중..."

    # tokens.json 파일 존재 여부 확인
    if [ ! -f "tokens/tokens.json" ]; then
        log_warn "tokens/tokens.json 파일이 없습니다. 토큰 빌드를 건너뜁니다."
        return
    fi

    # variables.css가 없거나 tokens.json이 더 최신인 경우 빌드
    if [ ! -f "src/tokens/variables.css" ] || \
       [ "tokens/tokens.json" -nt "src/tokens/variables.css" ]; then
        log_info "토큰 변경 감지. 재빌드합니다..."
        npm run tokens
        log_success "디자인 토큰 빌드 완료"
    else
        log_success "디자인 토큰이 최신 상태입니다"
    fi
}

# 브라우저 열기 함수
open_browser() {
    local url="http://localhost:$STORYBOOK_PORT"

    # 서버가 준비될 때까지 대기 (최대 60초)
    log_info "Storybook 서버 시작 대기 중..."

    for i in {1..60}; do
        if curl -s "$url" > /dev/null 2>&1; then
            log_success "Storybook 서버가 준비되었습니다!"

            # macOS에서 브라우저 열기
            if [[ "$OSTYPE" == "darwin"* ]]; then
                open "$url"
                log_success "브라우저에서 $url 열림"
            # Linux
            elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
                xdg-open "$url" 2>/dev/null || sensible-browser "$url" 2>/dev/null
                log_success "브라우저에서 $url 열림"
            fi
            return 0
        fi
        sleep 1
    done

    log_warn "서버 시작 대기 시간 초과. 수동으로 $url 에 접속해주세요."
}

# 도움말 출력
show_help() {
    echo ""
    echo "사용법: ./start-local.sh [옵션]"
    echo ""
    echo "옵션:"
    echo "  --storybook, -s    Storybook 개발 서버 실행 (기본값)"
    echo "  --dev, -d          Vite 개발 서버 실행"
    echo "  --build, -b        프로덕션 빌드"
    echo "  --tokens, -t       디자인 토큰만 빌드"
    echo "  --clean, -c        캐시만 정리"
    echo "  --help, -h         도움말 출력"
    echo ""
    echo "예시:"
    echo "  ./start-local.sh              # Storybook 실행"
    echo "  ./start-local.sh --dev        # Vite 개발 서버 실행"
    echo "  ./start-local.sh --build      # 프로덕션 빌드"
    echo ""
}

# 메인 실행
main() {
    local MODE="storybook"

    # 인자 파싱
    while [[ $# -gt 0 ]]; do
        case $1 in
            --storybook|-s)
                MODE="storybook"
                shift
                ;;
            --dev|-d)
                MODE="dev"
                shift
                ;;
            --build|-b)
                MODE="build"
                shift
                ;;
            --tokens|-t)
                MODE="tokens"
                shift
                ;;
            --clean|-c)
                MODE="clean"
                shift
                ;;
            --help|-h)
                show_help
                exit 0
                ;;
            *)
                log_error "알 수 없는 옵션: $1"
                show_help
                exit 1
                ;;
        esac
    done

    echo ""
    echo "=========================================="
    echo "   MEDIGATE Design System"
    echo "=========================================="
    echo ""

    # 환경 체크
    check_node
    check_npm

    case $MODE in
        "storybook")
            kill_existing_process $STORYBOOK_PORT
            clear_cache
            check_dependencies
            build_tokens

            echo ""
            log_info "Storybook 개발 서버를 시작합니다..."
            echo ""

            # 백그라운드에서 브라우저 열기 실행
            open_browser &

            # Storybook 개발 서버 실행
            npm run storybook
            ;;

        "dev")
            kill_existing_process $VITE_PORT
            clear_cache
            check_dependencies
            build_tokens

            echo ""
            log_info "Vite 개발 서버를 시작합니다..."
            echo ""

            # Vite 개발 서버 실행
            npm run dev
            ;;

        "build")
            clear_cache
            check_dependencies
            build_tokens

            echo ""
            log_info "프로덕션 빌드를 시작합니다..."
            echo ""

            npm run build
            npm run build-storybook

            log_success "빌드 완료!"
            log_info "  - Vite 빌드: dist/"
            log_info "  - Storybook 빌드: storybook-static/"
            ;;

        "tokens")
            check_dependencies

            echo ""
            log_info "디자인 토큰을 빌드합니다..."
            echo ""

            npm run tokens
            log_success "디자인 토큰 빌드 완료!"
            ;;

        "clean")
            clear_cache
            log_success "캐시 정리 완료!"
            ;;
    esac
}

# 스크립트 실행
main "$@"
