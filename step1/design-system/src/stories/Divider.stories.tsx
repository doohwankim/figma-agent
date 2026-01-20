import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from '../components/Divider';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'MEDIGATE 디자인 시스템의 Divider 컴포넌트입니다. Figma divider-solid 기반.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <p>위 내용</p>
      <Divider spacing={16} />
      <p>아래 내용</p>
    </div>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <Divider color="light" />
      <div style={{ height: '16px' }} />
      <Divider color="dark" />
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0', height: '40px' }}>
      <span>항목 1</span>
      <Divider orientation="vertical" spacing={16} />
      <span>항목 2</span>
      <Divider orientation="vertical" spacing={16} />
      <span>항목 3</span>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <p style={{ marginBottom: '8px', fontWeight: 600 }}>Light</p>
        <Divider color="light" />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontWeight: 600 }}>Dark</p>
        <Divider color="dark" />
      </div>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <p style={{ marginBottom: '8px', fontWeight: 600 }}>Solid</p>
        <Divider variant="solid" />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontWeight: 600 }}>Dashed</p>
        <Divider variant="dashed" />
      </div>
    </div>
  ),
};

export const WithSpacing: Story = {
  render: () => (
    <div style={{ width: '300px', background: '#f5f5f5', padding: '16px' }}>
      <p>상단 콘텐츠</p>
      <Divider spacing={24} />
      <p>하단 콘텐츠</p>
    </div>
  ),
};
