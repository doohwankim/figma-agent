import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../components/Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'MEDIGATE 디자인 시스템의 Badge 컴포넌트입니다. 상태, 카테고리, 레이블 등을 표시하는데 사용합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'pill'],
      description: 'Badge 모양 (default: 사각형, pill: 둥근 모양)',
    },
    size: {
      control: 'select',
      options: ['tiny', 'xs', 'sm', 'md'],
      description: 'Badge 크기',
    },
    color: {
      control: 'select',
      options: [
        'primary', 'primary-subtle',
        'secondary',
        'success', 'success-subtle',
        'warning', 'warning-subtle',
        'error', 'error-subtle',
        'essential', 'essential-subtle',
        'light', 'tonal'
      ],
      description: 'Badge 색상',
    },
    children: {
      control: 'text',
      description: 'Badge 텍스트',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

// 기본 Badge
export const Default: Story = {
  args: {
    children: 'Badge',
    type: 'default',
    size: 'sm',
    color: 'primary',
  },
};

// Pill 타입
export const Pill: Story = {
  args: {
    children: 'Pill Badge',
    type: 'pill',
    size: 'sm',
    color: 'primary',
  },
};

// 모든 색상
export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', maxWidth: '600px' }}>
      <Badge color="primary">Primary</Badge>
      <Badge color="primary-subtle">Primary Subtle</Badge>
      <Badge color="secondary">Secondary</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="success-subtle">Success Subtle</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="warning-subtle">Warning Subtle</Badge>
      <Badge color="error">Error</Badge>
      <Badge color="error-subtle">Error Subtle</Badge>
      <Badge color="essential">Essential</Badge>
      <Badge color="essential-subtle">Essential Subtle</Badge>
      <Badge color="light">Light</Badge>
      <Badge color="tonal">Tonal</Badge>
    </div>
  ),
};

// 모든 크기
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Badge size="tiny" color="primary">Tiny</Badge>
      <Badge size="xs" color="primary">XS</Badge>
      <Badge size="sm" color="primary">SM</Badge>
      <Badge size="md" color="primary">MD</Badge>
    </div>
  ),
};

// Pill 모든 색상
export const PillAllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', maxWidth: '600px' }}>
      <Badge type="pill" color="primary">Primary</Badge>
      <Badge type="pill" color="primary-subtle">Primary Subtle</Badge>
      <Badge type="pill" color="success">Success</Badge>
      <Badge type="pill" color="success-subtle">Success Subtle</Badge>
      <Badge type="pill" color="warning">Warning</Badge>
      <Badge type="pill" color="error">Error</Badge>
      <Badge type="pill" color="essential">Essential</Badge>
      <Badge type="pill" color="light">Light</Badge>
    </div>
  ),
};

// 실제 사용 예시
export const UsageExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontWeight: 600 }}>상태 표시:</span>
        <Badge color="success">승인됨</Badge>
        <Badge color="warning">대기중</Badge>
        <Badge color="error">거절됨</Badge>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontWeight: 600 }}>카테고리:</span>
        <Badge type="pill" color="primary-subtle">임대</Badge>
        <Badge type="pill" color="secondary">분양</Badge>
        <Badge type="pill" color="tonal">기타</Badge>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontWeight: 600 }}>숫자 표시:</span>
        <Badge type="pill" color="error" size="xs">99+</Badge>
        <Badge type="pill" color="primary" size="xs">12</Badge>
      </div>
    </div>
  ),
};
