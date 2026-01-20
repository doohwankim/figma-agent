# Vibe Coding 테스트 - 요구사항 정의서

## 프로젝트 개요
Figma MCP 도구를 활용하여 디자인 시스템을 개발 코드로 변환하고, 웹상에서 확인 가능한 화면을 제공하는 테스트 프로젝트

## 단계별 진행 항목

### STEP 1: 피그마 디자인 시스템 (Design Tokens & Component)
- **입력**: Figma 디자인 시스템 v2.0
- **출력**: 개발 코드로 변환 (웹상에서 확인 가능한 화면으로 제공)
- **Figma URL**: https://www.figma.com/design/ZTciWbhnngFUb1rgUeRcNG/01-MEDIGATE---디자인-시스템-v2.0?node-id=1184-7620
- **File Key**: `ZTciWbhnngFUb1rgUeRcNG`
- **Node ID**: `1184-7620`

### STEP 2: 공통 모듈 (디자인 시스템 반영)
- **입력**: Figma 공통 모듈 + STEP 1의 디자인 시스템
- **출력**: 개발 코드로 변환 (웹상에서 확인 가능한 화면으로 제공)
- **Figma URL**: https://www.figma.com/design/Nnz8tu3pOlGqd3NejWS6e3/02-MEDIGATE---공통-모듈?node-id=5-1370
- **File Key**: `Nnz8tu3pOlGqd3NejWS6e3`
- **Node ID**: `5-1370`

### STEP 3: 서비스 화면 (디자인 시스템 + 공통 모듈)
- **입력**: Figma 임대분양 화면 + STEP 1 + STEP 2
- **출력**: 단일화면 별 퍼블리싱 or 전체화면 퍼블리싱
- **Figma URL**: https://www.figma.com/design/X70roUIytMJwUPSDbEzwIH/A-3-2-MEDI-GATE---임대분양?node-id=2005-16352
- **File Key**: `X70roUIytMJwUPSDbEzwIH`
- **Node ID**: `2005-16352`

## Figma 연결 정보
- **API Key**: 환경변수 `FIGMA_ACCESS_TOKEN` 사용 (`.env` 파일 참조)
- **MCP 설정**: 프로젝트 루트의 `.mcp.json` 파일

## 프로젝트 구조
```
figma_test/
├── docs/           # 요구사항, 문서
├── setup/          # 환경 설정 관련 문서
├── step1/          # STEP 1 - 디자인 시스템
├── step2/          # STEP 2 - 공통 모듈
├── step3/          # STEP 3 - 서비스 화면
└── assets/         # 이미지, 아이콘 등 리소스
```

## 생성일
2026-01-19
