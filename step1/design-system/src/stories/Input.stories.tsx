import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../components/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'MEDIGATE 디자인 시스템의 Input 컴포넌트입니다. Figma 실제 값 100% 동기화.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '인풋 크기',
    },
    state: {
      control: 'select',
      options: ['default', 'error', 'success'],
      description: '인풋 상태',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: '입력하세요',
    size: 'md',
  },
};

export const WithLabel: Story = {
  args: {
    label: '이메일',
    placeholder: 'example@email.com',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Input size="lg" placeholder="Large" label="Large" />
      <Input size="md" placeholder="Medium" label="Medium" />
      <Input size="sm" placeholder="Small" label="Small" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Input placeholder="기본 상태" label="기본" helperText="도움말 텍스트입니다" />
      <Input placeholder="에러 상태" label="에러" errorMessage="필수 입력 항목입니다" />
      <Input placeholder="성공 상태" label="성공" successMessage="확인되었습니다" />
      <Input placeholder="비활성화" label="비활성화" disabled />
    </div>
  ),
};

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Input placeholder="검색어를 입력하세요" leftIcon={<SearchIcon />} />
      <Input placeholder="입력하세요" rightIcon={<CloseIcon />} />
      <Input placeholder="검색" leftIcon={<SearchIcon />} rightIcon={<CloseIcon />} />
    </div>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <Input placeholder="전체 너비" label="전체 너비 인풋" fullWidth />
    </div>
  ),
};
