# Tokens Studio 연동 가이드

## 개요

이 프로젝트는 **Tokens Studio** (Figma 플러그인) + **Style Dictionary**를 사용하여
Figma 디자인 토큰을 코드로 자동 변환합니다.

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│  Figma에서      │     │  tokens/         │     │  src/tokens/    │
│  Tokens Studio  │ ──▶ │  tokens.json     │ ──▶ │  variables.css  │
│  플러그인 사용   │     │  (소스 파일)      │     │  (자동 생성)     │
└─────────────────┘     └──────────────────┘     └─────────────────┘
```

## 1. Figma에서 Tokens Studio 설정

### 1.1 플러그인 설치
1. Figma에서 `Plugins` → `Browse plugins in Community` 선택
2. "Tokens Studio for Figma" 검색 후 설치

### 1.2 토큰 정의
플러그인에서 다음과 같은 토큰들을 정의합니다:

| 카테고리 | 예시 |
|---------|------|
| Colors | `color.primary.500`, `color.gray.100` |
| Spacing | `spacing.1` (4px), `spacing.2` (8px) |
| Typography | `fontSize.sm`, `fontWeight.bold` |
| Border Radius | `borderRadius.md` |
| Shadows | `shadow.sm`, `shadow.lg` |

### 1.3 토큰 참조 사용
토큰은 다른 토큰을 참조할 수 있습니다:

```json
{
  "gap": {
    "sm": { "value": "{spacing.2}" }  // spacing.2 (8px)를 참조
  }
}
```

## 2. 토큰 Export 방법

### 방법 A: 수동 Export
1. Tokens Studio 플러그인 열기
2. `Export` → `JSON` 선택
3. `tokens/tokens.json` 파일로 저장
4. `npm run tokens` 실행

### 방법 B: GitHub 동기화 (권장)
1. Tokens Studio에서 `Settings` → `Sync providers` → `GitHub` 선택
2. Repository, Branch, File path 설정
3. Push/Pull로 자동 동기화

### 방법 C: CI/CD 연동
```yaml
# .github/workflows/tokens.yml
name: Build Tokens
on:
  push:
    paths:
      - 'tokens/**'

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npm run tokens
      - uses: stefanzweifel/git-auto-commit-action@v5
        with:
          commit_message: "chore: rebuild design tokens"
```

## 3. 개발 워크플로우

### 토큰 빌드 명령어
```bash
# 토큰 한 번 빌드
npm run tokens

# 토큰 변경 감지 및 자동 빌드 (개발 시)
npm run tokens:watch
```

### 생성되는 파일
| 파일 | 설명 |
|------|------|
| `src/tokens/variables.css` | CSS 변수 (`:root { --color-primary-500: #3399ff; }`) |
| `src/tokens/tokens.js` | JavaScript 상수 |

## 4. 토큰 사용 예시

### CSS에서 사용
```css
.button {
  background-color: var(--color-primary-500);
  padding: var(--padding-md);
  border-radius: var(--border-radius-md);
  gap: var(--gap-sm);
}
```

### JavaScript/TypeScript에서 사용
```typescript
import { ColorPrimary500, SpacingMd } from '../tokens/tokens';

const styles = {
  backgroundColor: ColorPrimary500,
  padding: SpacingMd,
};
```

## 5. 토큰 구조

현재 정의된 토큰 카테고리:

```
tokens/tokens.json
├── color
│   ├── primary (50~900)
│   ├── gray (50~900)
│   ├── success, warning, error, info
│   ├── text (primary, secondary, disabled, inverse)
│   ├── background (default, paper, disabled)
│   └── border (default, focus)
├── spacing (0~20)
├── gap (xs~xl) → spacing 참조
├── padding (xs~xl) → spacing 참조
├── borderRadius (none~full)
├── borderWidth (none~thick)
├── fontSize (xs~5xl)
├── fontWeight (regular~bold)
├── lineHeight (tight~relaxed)
├── shadow (sm~xl)
├── transition (fast~slow)
└── fontFamily (base, mono)
```

## 6. 토큰 참조 예시

`gap.sm`은 `spacing.2`를 참조하므로:
- `tokens.json`: `"gap": { "sm": { "value": "{spacing.2}" } }`
- `variables.css`: `--gap-sm: var(--spacing-2);`

이렇게 참조를 사용하면 `spacing.2` 값이 변경될 때 `gap.sm`도 자동으로 변경됩니다.

## 7. 문제 해결

### Q: 토큰이 CSS에 반영되지 않아요
```bash
# 토큰 재빌드
npm run tokens

# Storybook 재시작
npm run storybook
```

### Q: 새 토큰을 추가했는데 타입 에러가 나요
`npm run tokens` 실행 후 `tokens.js`가 재생성되었는지 확인하세요.

### Q: Figma와 코드의 색상이 다르게 보여요
1. Figma에서 Color Profile 확인 (sRGB 권장)
2. 토큰 값이 정확한 HEX/RGB인지 확인
