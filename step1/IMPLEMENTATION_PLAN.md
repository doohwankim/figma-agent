# STEP 1: 디자인 시스템 구현 계획

## 목표
Figma 디자인 시스템(Design Tokens & Components)을 개발 코드로 변환하여 웹상에서 확인 가능한 화면 제공

## Figma 디자인 시스템 구조 분석

### Foundation (Design Tokens)
1. **Color** - 컬러 팔레트
   - Primitives Color (Black & White, Blue, 등)
   - Semantic Color (primary, success, essential 등)

2. **Typography** - 타이포그래피
   - Display, Headline, Body, Label 스타일
   - Font: SUIT
   - Sizes: xs(12), sm(14), md(16), lg(20), xl(24) 등

3. **Iconography** - 아이콘
4. **Spacing** - 간격
5. **Border Radius** - 모서리 둥글기

### Components
- Badge (pill, square)
- Button
- Checkbox
- Dialog
- Divider
- Input
- Menu
- Modal
- Pagination
- Radio
- Scroll
- Select
- Switch
- Tab
- Text Area
- Tooltip

---

## 구현 아이디어 제안

### Option A: Storybook + CSS Variables (추천)
**장점**: 컴포넌트 문서화, 실시간 미리보기, 팀 협업 용이

```
step1/
├── storybook/
├── src/
│   ├── tokens/
│   │   ├── colors.css      # CSS Custom Properties
│   │   ├── typography.css
│   │   ├── spacing.css
│   │   └── index.css
│   ├── components/
│   │   ├── Badge/
│   │   ├── Button/
│   │   └── ...
│   └── index.ts
├── package.json
└── .storybook/
```

### Option B: Tailwind CSS Config + 컴포넌트
**장점**: 빠른 개발, 유틸리티 클래스 활용

```
step1/
├── src/
│   ├── tailwind.config.js  # 디자인 토큰 정의
│   ├── components/
│   └── pages/preview.html
└── package.json
```

### Option C: Style Dictionary + React 컴포넌트
**장점**: 다중 플랫폼 지원, 토큰 관리 자동화

```
step1/
├── tokens/
│   └── design-tokens.json
├── style-dictionary.config.js
├── src/
│   ├── generated/          # 자동 생성된 CSS/JS
│   └── components/
└── package.json
```

---

## 추천 구현 방식: Option A (Storybook + CSS Variables)

### 이유
1. **시각적 확인 용이**: Storybook에서 모든 토큰과 컴포넌트 즉시 확인
2. **문서화 자동화**: 컴포넌트 props, 사용법 자동 문서화
3. **범용성**: CSS Variables는 어떤 프레임워크에서도 사용 가능
4. **확장성**: STEP 2, 3에서 컴포넌트 재사용 용이

### 구현 순서
1. 프로젝트 초기화 (Vite + React + TypeScript)
2. Storybook 설정
3. Design Tokens 추출 및 CSS Variables 생성
   - Colors (Figma에서 추출한 컬러 값)
   - Typography (SUIT 폰트, 크기, 굵기)
   - Spacing, Border Radius
4. 기본 컴포넌트 구현 (Badge, Button 등)
5. Storybook Stories 작성
6. 빌드 및 배포 (Vercel/Netlify)

### 기술 스택
- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: CSS Modules + CSS Variables
- **Documentation**: Storybook 8
- **Font**: SUIT (웹폰트)

---

## 다음 단계
1. 사용자 승인 후 프로젝트 초기화
2. Figma에서 정확한 컬러 값, 타이포그래피 값 추출
3. Design Tokens → CSS Variables 변환
4. 컴포넌트 구현
