import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from '../components/TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'Components/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'MEDIGATE 디자인 시스템의 TextArea 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
    placeholder: '내용을 입력하세요',
  },
};

export const WithLabel: Story = {
  args: {
    label: '설명',
    placeholder: '내용을 입력하세요',
    helperText: '최대 500자까지 입력 가능합니다',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <TextArea size="lg" placeholder="Large" label="Large" />
      <TextArea size="md" placeholder="Medium" label="Medium" />
      <TextArea size="sm" placeholder="Small" label="Small" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <TextArea placeholder="기본 상태" label="기본" helperText="도움말 텍스트입니다" />
      <TextArea placeholder="에러 상태" label="에러" errorMessage="필수 입력 항목입니다" />
      <TextArea placeholder="비활성화" label="비활성화" disabled />
    </div>
  ),
};

export const ResizeOptions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <TextArea placeholder="세로 리사이즈 (기본)" label="Vertical" resize="vertical" />
      <TextArea placeholder="리사이즈 불가" label="None" resize="none" />
      <TextArea placeholder="가로세로 리사이즈" label="Both" resize="both" />
    </div>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <TextArea placeholder="전체 너비" label="전체 너비 텍스트 영역" fullWidth />
    </div>
  ),
};
