# Vibe Coding 테스트 프로젝트

## 프로젝트 개요
Figma 디자인 시스템을 개발 코드로 변환하는 테스트 프로젝트

## Figma MCP 연결 정보
- **Access Token**: 환경변수 `FIGMA_ACCESS_TOKEN` 사용 (`.env` 파일 참조)

## Figma 파일 목록

### [STEP 1] 디자인 시스템 v2.0
- **URL**: https://www.figma.com/design/ZTciWbhnngFUb1rgUeRcNG/01-MEDIGATE---디자인-시스템-v2.0
- **File Key**: `ZTciWbhnngFUb1rgUeRcNG`
- **Node ID**: `1184-7620`

### [STEP 2] 공통 모듈
- **URL**: https://www.figma.com/design/Nnz8tu3pOlGqd3NejWS6e3/02-MEDIGATE---공통-모듈
- **File Key**: `Nnz8tu3pOlGqd3NejWS6e3`
- **Node ID**: `5-1370`

### [STEP 3] 임대분양 서비스 화면
- **URL**: https://www.figma.com/design/X70roUIytMJwUPSDbEzwIH/A-3-2-MEDI-GATE---임대분양
- **File Key**: `X70roUIytMJwUPSDbEzwIH`
- **Node ID**: `2005-16352`

## 테스트 단계별 진행 항목

### [STEP 1] 피그마 디자인 시스템
- **목표**: Design Tokens & Component → 개발 코드로 변환
- **결과물**: 웹상에서 확인 가능한 화면으로 제공
- **상태**: ⏳ 대기중

### [STEP 2] 공통 모듈
- **목표**: 디자인 시스템 반영 → 개발 코드로 변환
- **결과물**: 웹상에서 확인 가능한 화면으로 제공
- **상태**: ⏳ 대기중

### [STEP 3] 서비스 화면
- **목표**: 디자인 시스템 + 공통 모듈 → 단일화면 별 퍼블리싱 or 전체화면 퍼블리싱
- **상태**: ⏳ 대기중

## 기술 스택 (예정)
- React / Next.js
- TypeScript
- Tailwind CSS / Styled Components
- Storybook (컴포넌트 문서화)

## 디렉토리 구조 (예정)
```
figma_test/
├── PROJECT_CONFIG.md      # 프로젝트 설정 정보
├── src/
│   ├── tokens/            # Design Tokens
│   ├── components/        # 공통 컴포넌트
│   └── pages/             # 서비스 화면
└── storybook/             # 컴포넌트 스토리북
```
