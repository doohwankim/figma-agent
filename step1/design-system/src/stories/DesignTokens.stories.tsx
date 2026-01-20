import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta = {
  title: 'Foundation/Design Tokens',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'MEDIGATE 디자인 시스템의 Design Tokens입니다. Figma 실제 값 기반으로 100% 동기화되었습니다.',
      },
    },
  },
};

export default meta;

// 색상 스와치 컴포넌트
const ColorSwatch: React.FC<{ name: string; cssVar: string; hex?: string }> = ({ name, cssVar, hex }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
    <div
      style={{
        width: '48px',
        height: '48px',
        backgroundColor: `var(${cssVar})`,
        borderRadius: '8px',
        border: '1px solid #E2E7EB',
      }}
    />
    <div>
      <div style={{ fontWeight: 600, fontSize: '14px' }}>{name}</div>
      <code style={{ fontSize: '12px', color: '#6D767F' }}>{cssVar}</code>
      {hex && <div style={{ fontSize: '12px', color: '#848F99' }}>{hex}</div>}
    </div>
  </div>
);

// 컬러 그룹 컴포넌트
const ColorGroup: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div style={{ marginBottom: '32px' }}>
    <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '16px', color: '#1A1A1A' }}>{title}</h3>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '8px' }}>
      {children}
    </div>
  </div>
);

export const Colors: StoryObj = {
  render: () => (
    <div style={{ padding: '40px', fontFamily: 'var(--font-family-base)' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 900, marginBottom: '8px' }}>Colors</h1>
      <p style={{ color: '#6D767F', marginBottom: '40px' }}>
        메디씨앤씨 디자인시스템에서 사용되는 컬러는 로고와 함께 메디씨앤씨를 대표하는 중요한 요소입니다.
      </p>

      <ColorGroup title="Primary (Blue)">
        <ColorSwatch name="Blue 900" cssVar="--color-blue-900" hex="#1045A1" />
        <ColorSwatch name="Blue 800" cssVar="--color-blue-800" hex="#1764C0" />
        <ColorSwatch name="Blue 700" cssVar="--color-blue-700" hex="#1A75D2" />
        <ColorSwatch name="Blue 600" cssVar="--color-blue-600" hex="#1F87E5" />
        <ColorSwatch name="Blue 500" cssVar="--color-blue-500" hex="#2194F3" />
        <ColorSwatch name="Blue 400" cssVar="--color-blue-400" hex="#42A4F5" />
        <ColorSwatch name="Blue 300" cssVar="--color-blue-300" hex="#63B4F6" />
        <ColorSwatch name="Blue 200" cssVar="--color-blue-200" hex="#90C9F9" />
        <ColorSwatch name="Blue 100" cssVar="--color-blue-100" hex="#BBDEFB" />
        <ColorSwatch name="Blue 50" cssVar="--color-blue-50" hex="#E3F2FD" />
      </ColorGroup>

      <ColorGroup title="Gray">
        <ColorSwatch name="Gray 900" cssVar="--color-gray-900" hex="#2F3337" />
        <ColorSwatch name="Gray 800" cssVar="--color-gray-800" hex="#43494E" />
        <ColorSwatch name="Gray 700" cssVar="--color-gray-700" hex="#595F66" />
        <ColorSwatch name="Gray 600" cssVar="--color-gray-600" hex="#6D767F" />
        <ColorSwatch name="Gray 500" cssVar="--color-gray-500" hex="#848F99" />
        <ColorSwatch name="Gray 400" cssVar="--color-gray-400" hex="#A4ADB4" />
        <ColorSwatch name="Gray 300" cssVar="--color-gray-300" hex="#C1C8CF" />
        <ColorSwatch name="Gray 200" cssVar="--color-gray-200" hex="#E2E7EB" />
        <ColorSwatch name="Gray 100" cssVar="--color-gray-100" hex="#F1F5F8" />
        <ColorSwatch name="Gray 50" cssVar="--color-gray-50" hex="#F5F5F5" />
      </ColorGroup>

      <ColorGroup title="Success (Teal)">
        <ColorSwatch name="Teal 900" cssVar="--color-teal-900" hex="#004E48" />
        <ColorSwatch name="Teal 700" cssVar="--color-teal-700" hex="#007A76" />
        <ColorSwatch name="Teal 500" cssVar="--color-teal-500" hex="#009795" />
        <ColorSwatch name="Teal 300" cssVar="--color-teal-300" hex="#43B7B8" />
        <ColorSwatch name="Teal 100" cssVar="--color-teal-100" hex="#B1DFE1" />
        <ColorSwatch name="Teal 50" cssVar="--color-teal-50" hex="#E0F2F3" />
      </ColorGroup>

      <ColorGroup title="Error (Red)">
        <ColorSwatch name="Red 900" cssVar="--color-red-900" hex="#CE0000" />
        <ColorSwatch name="Red 700" cssVar="--color-red-700" hex="#EC0017" />
        <ColorSwatch name="Red 500" cssVar="--color-red-500" hex="#FF2019" />
        <ColorSwatch name="Red 300" cssVar="--color-red-300" hex="#FF6666" />
        <ColorSwatch name="Red 100" cssVar="--color-red-100" hex="#FFCACF" />
        <ColorSwatch name="Red 50" cssVar="--color-red-50" hex="#FFEAED" />
      </ColorGroup>

      <ColorGroup title="Warning (Yellow)">
        <ColorSwatch name="Yellow 900" cssVar="--color-yellow-900" hex="#FF6F00" />
        <ColorSwatch name="Yellow 700" cssVar="--color-yellow-700" hex="#FFA000" />
        <ColorSwatch name="Yellow 500" cssVar="--color-yellow-500" hex="#FFC107" />
        <ColorSwatch name="Yellow 300" cssVar="--color-yellow-300" hex="#FFD54F" />
        <ColorSwatch name="Yellow 100" cssVar="--color-yellow-100" hex="#FFECB3" />
        <ColorSwatch name="Yellow 50" cssVar="--color-yellow-50" hex="#FFF8E1" />
      </ColorGroup>

      <ColorGroup title="Semantic Colors">
        <ColorSwatch name="Primary" cssVar="--color-primary" />
        <ColorSwatch name="Primary Hover" cssVar="--color-primary-hover" />
        <ColorSwatch name="Primary Subtle" cssVar="--color-primary-subtle" />
        <ColorSwatch name="Success" cssVar="--color-success" />
        <ColorSwatch name="Success Subtle" cssVar="--color-success-subtle" />
        <ColorSwatch name="Warning" cssVar="--color-warning" />
        <ColorSwatch name="Warning Subtle" cssVar="--color-warning-subtle" />
        <ColorSwatch name="Error" cssVar="--color-error" />
        <ColorSwatch name="Error Subtle" cssVar="--color-error-subtle" />
      </ColorGroup>
    </div>
  ),
};

// 타이포그래피 샘플 컴포넌트
const TypographySample: React.FC<{
  name: string;
  className: string;
  cssVars: string[];
}> = ({ name, className, cssVars }) => (
  <div style={{ marginBottom: '24px', borderBottom: '1px solid #E2E7EB', paddingBottom: '24px' }}>
    <div className={className} style={{ marginBottom: '8px' }}>
      {name}
    </div>
    <div style={{ fontSize: '12px', color: '#848F99' }}>
      {cssVars.map((v, i) => (
        <code key={i} style={{ marginRight: '16px' }}>{v}</code>
      ))}
    </div>
  </div>
);

export const Typography: StoryObj = {
  render: () => (
    <div style={{ padding: '40px', fontFamily: 'var(--font-family-base)' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 900, marginBottom: '8px' }}>Typography</h1>
      <p style={{ color: '#6D767F', marginBottom: '40px' }}>
        타이포그래피(Typography)는 서비스와 사용자가 커뮤니케이션하는 주요 요소입니다.
        <br />Font Family: <strong>SUIT</strong> | Letter Spacing: <strong>-3%</strong> (전역)
      </p>

      <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '24px' }}>Display (Figma 실제 값)</h2>
      <TypographySample
        name="Display lg - SUIT 500 57/64 -3%"
        className="text-display-lg"
        cssVars={['57px', 'line-height: 1.12', 'weight: 500']}
      />
      <TypographySample
        name="Display lg Bold - SUIT 700 57/64 -3%"
        className="text-display-lg-bold"
        cssVars={['57px', 'line-height: 1.12', 'weight: 700']}
      />
      <TypographySample
        name="Display md - SUIT 500 45/52 -3%"
        className="text-display-md"
        cssVars={['45px', 'line-height: 1.16', 'weight: 500']}
      />
      <TypographySample
        name="Display sm - SUIT 500 36/44 -3%"
        className="text-display-sm"
        cssVars={['36px', 'line-height: 1.22', 'weight: 500']}
      />

      <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '24px', marginTop: '40px' }}>Headline (Figma 실제 값)</h2>
      <TypographySample
        name="Headline lg - SUIT 500 32/40 -3%"
        className="text-headline-lg"
        cssVars={['32px', 'line-height: 1.25', 'weight: 500']}
      />
      <TypographySample
        name="Headline lg Bold - SUIT 700 32/40 -3%"
        className="text-headline-lg-bold"
        cssVars={['32px', 'line-height: 1.25', 'weight: 700']}
      />
      <TypographySample
        name="Headline md - SUIT 500 28/36 -3%"
        className="text-headline-md"
        cssVars={['28px', 'line-height: 1.29', 'weight: 500']}
      />
      <TypographySample
        name="Headline sm - SUIT 500 24/32 -3%"
        className="text-headline-sm"
        cssVars={['24px', 'line-height: 1.33', 'weight: 500']}
      />

      <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '24px', marginTop: '40px' }}>Body (Figma 실제 값)</h2>
      <TypographySample
        name="Body xl - SUIT 500 20/28 -3%"
        className="text-body-xl"
        cssVars={['20px', 'line-height: 1.4', 'weight: 500']}
      />
      <TypographySample
        name="Body lg - SUIT 500 16/24 -3%"
        className="text-body-lg"
        cssVars={['16px', 'line-height: 1.5', 'weight: 500']}
      />
      <TypographySample
        name="Body md - SUIT 500 14/20 -3%"
        className="text-body-md"
        cssVars={['14px', 'line-height: 1.43', 'weight: 500']}
      />
      <TypographySample
        name="Body sm - SUIT 500 12/16 -3%"
        className="text-body-sm"
        cssVars={['12px', 'line-height: 1.33', 'weight: 500']}
      />

      <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '24px', marginTop: '40px' }}>Label (Figma 실제 값)</h2>
      <TypographySample
        name="Label md - SUIT 500 14/20 -3%"
        className="text-label-md"
        cssVars={['14px', 'line-height: 1.43', 'weight: 500']}
      />
      <TypographySample
        name="Label sm - SUIT 500 12/16 -3%"
        className="text-label-sm"
        cssVars={['12px', 'line-height: 1.33', 'weight: 500']}
      />
      <TypographySample
        name="Label xs - SUIT 500 10/12 -3%"
        className="text-label-xs"
        cssVars={['10px', 'line-height: 1.2', 'weight: 500']}
      />
    </div>
  ),
};

export const Spacing: StoryObj = {
  render: () => (
    <div style={{ padding: '40px', fontFamily: 'var(--font-family-base)' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 900, marginBottom: '8px' }}>Spacing & Radius</h1>
      <p style={{ color: '#6D767F', marginBottom: '40px' }}>
        일관된 간격과 모서리 반경을 위한 토큰입니다.
      </p>

      <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '24px' }}>Spacing Scale (4px base)</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '40px' }}>
        {[
          { name: 'spacing-1', value: '4px' },
          { name: 'spacing-2', value: '8px' },
          { name: 'spacing-3', value: '12px' },
          { name: 'spacing-4', value: '16px' },
          { name: 'spacing-6', value: '24px' },
          { name: 'spacing-8', value: '32px' },
          { name: 'spacing-10', value: '40px' },
          { name: 'spacing-12', value: '48px' },
        ].map(({ name, value }) => (
          <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: value,
                height: '24px',
                backgroundColor: 'var(--color-primary)',
                borderRadius: '4px',
              }}
            />
            <code style={{ minWidth: '120px' }}>--{name}</code>
            <span style={{ color: '#6D767F' }}>{value}</span>
          </div>
        ))}
      </div>

      <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '24px' }}>Border Radius</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
        {[
          { name: 'radius-sm', value: '4px' },
          { name: 'radius-md', value: '8px' },
          { name: 'radius-lg', value: '12px' },
          { name: 'radius-xl', value: '16px' },
          { name: 'radius-2xl', value: '24px' },
          { name: 'radius-full', value: '9999px' },
        ].map(({ name, value }) => (
          <div key={name} style={{ textAlign: 'center' }}>
            <div
              style={{
                width: '80px',
                height: '80px',
                backgroundColor: 'var(--color-primary-subtle)',
                border: '2px solid var(--color-primary)',
                borderRadius: `var(--${name})`,
                marginBottom: '8px',
              }}
            />
            <code style={{ fontSize: '12px' }}>--{name}</code>
            <div style={{ fontSize: '12px', color: '#6D767F' }}>{value}</div>
          </div>
        ))}
      </div>
    </div>
  ),
};
