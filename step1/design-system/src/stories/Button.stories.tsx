import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'MEDIGATE 디자인 시스템의 Button 컴포넌트입니다. 사용자 액션을 트리거하는 데 사용합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'ghost', 'text'],
      description: '버튼 스타일 변형',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: '버튼 크기',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'essential'],
      description: '버튼 색상',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태',
    },
    loading: {
      control: 'boolean',
      description: '로딩 상태',
    },
    fullWidth: {
      control: 'boolean',
      description: '전체 너비 사용',
    },
    children: {
      control: 'text',
      description: '버튼 텍스트',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// 기본 버튼
export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'filled',
    size: 'md',
    color: 'primary',
  },
};

// Filled 변형 - 모든 색상
export const FilledColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      <Button variant="filled" color="primary">Primary</Button>
      <Button variant="filled" color="secondary">Secondary</Button>
      <Button variant="filled" color="success">Success</Button>
      <Button variant="filled" color="warning">Warning</Button>
      <Button variant="filled" color="error">Error</Button>
      <Button variant="filled" color="essential">Essential</Button>
    </div>
  ),
};

// Outlined 변형 - 모든 색상
export const OutlinedColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      <Button variant="outlined" color="primary">Primary</Button>
      <Button variant="outlined" color="secondary">Secondary</Button>
      <Button variant="outlined" color="success">Success</Button>
      <Button variant="outlined" color="warning">Warning</Button>
      <Button variant="outlined" color="error">Error</Button>
      <Button variant="outlined" color="essential">Essential</Button>
    </div>
  ),
};

// Ghost 변형 - 모든 색상
export const GhostColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      <Button variant="ghost" color="primary">Primary</Button>
      <Button variant="ghost" color="secondary">Secondary</Button>
      <Button variant="ghost" color="success">Success</Button>
      <Button variant="ghost" color="warning">Warning</Button>
      <Button variant="ghost" color="error">Error</Button>
      <Button variant="ghost" color="essential">Essential</Button>
    </div>
  ),
};

// Text 변형 - 모든 색상
export const TextColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      <Button variant="text" color="primary">Primary</Button>
      <Button variant="text" color="secondary">Secondary</Button>
      <Button variant="text" color="success">Success</Button>
      <Button variant="text" color="warning">Warning</Button>
      <Button variant="text" color="error">Error</Button>
      <Button variant="text" color="essential">Essential</Button>
    </div>
  ),
};

// 모든 크기
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Button size="xs">XS</Button>
      <Button size="sm">SM</Button>
      <Button size="md">MD</Button>
      <Button size="lg">LG</Button>
      <Button size="xl">XL</Button>
    </div>
  ),
};

// 로딩 상태
export const Loading: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Button loading>Loading</Button>
      <Button variant="outlined" loading>Loading</Button>
      <Button variant="ghost" loading>Loading</Button>
    </div>
  ),
};

// 비활성화 상태
export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Button disabled>Disabled</Button>
      <Button variant="outlined" disabled>Disabled</Button>
      <Button variant="ghost" disabled>Disabled</Button>
      <Button variant="text" disabled>Disabled</Button>
    </div>
  ),
};

// 전체 너비
export const FullWidth: Story = {
  render: () => (
    <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Button fullWidth>Full Width Button</Button>
      <Button variant="outlined" fullWidth>Full Width Outlined</Button>
    </div>
  ),
};

// 아이콘 버튼
const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      <Button leftIcon={<PlusIcon />}>Add Item</Button>
      <Button rightIcon={<ArrowIcon />}>Next Step</Button>
      <Button leftIcon={<PlusIcon />} rightIcon={<ArrowIcon />}>Both Icons</Button>
      <Button variant="outlined" leftIcon={<PlusIcon />}>Outlined</Button>
      <Button variant="ghost" leftIcon={<PlusIcon />}>Ghost</Button>
    </div>
  ),
};

// 실제 사용 예시
export const UsageExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* 폼 액션 */}
      <div>
        <p style={{ marginBottom: '8px', fontWeight: 600 }}>폼 액션</p>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button color="primary">저장</Button>
          <Button variant="outlined" color="essential">취소</Button>
        </div>
      </div>

      {/* 위험 액션 */}
      <div>
        <p style={{ marginBottom: '8px', fontWeight: 600 }}>위험 액션</p>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button color="error">삭제</Button>
          <Button variant="outlined" color="error">삭제</Button>
          <Button variant="ghost" color="error">삭제</Button>
        </div>
      </div>

      {/* 상태 변형 */}
      <div>
        <p style={{ marginBottom: '8px', fontWeight: 600 }}>상태 변형</p>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button>기본</Button>
          <Button loading>로딩중</Button>
          <Button disabled>비활성화</Button>
        </div>
      </div>
    </div>
  ),
};
