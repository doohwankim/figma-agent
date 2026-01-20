import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Select } from '../components/Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'MEDIGATE 디자인 시스템의 Select 컴포넌트입니다. Figma Dropdown List 기반.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '셀렉트 크기',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const options = [
  { value: 'option1', label: '옵션 1' },
  { value: 'option2', label: '옵션 2' },
  { value: 'option3', label: '옵션 3' },
  { value: 'option4', label: '옵션 4 (비활성화)', disabled: true },
  { value: 'option5', label: '옵션 5' },
];

export const Default: Story = {
  args: {
    options,
    placeholder: '선택하세요',
  },
};

export const WithLabel: Story = {
  args: {
    options,
    label: '카테고리',
    placeholder: '카테고리를 선택하세요',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Select size="lg" options={options} label="Large" placeholder="Large" />
      <Select size="md" options={options} label="Medium" placeholder="Medium" />
      <Select size="sm" options={options} label="Small" placeholder="Small" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Select options={options} label="기본" placeholder="선택하세요" />
      <Select options={options} label="에러" placeholder="선택하세요" error errorMessage="필수 선택 항목입니다" />
      <Select options={options} label="비활성화" placeholder="선택하세요" disabled />
    </div>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <div style={{ width: '300px' }}>
        <Select
          options={options}
          label="지역 선택"
          placeholder="지역을 선택하세요"
          value={value}
          onChange={setValue}
        />
        <p style={{ marginTop: '8px', fontSize: '14px', color: '#6D767F' }}>
          선택된 값: {value || '없음'}
        </p>
      </div>
    );
  },
};

export const FullWidth: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <Select
        options={options}
        label="전체 너비"
        placeholder="선택하세요"
        fullWidth
      />
    </div>
  ),
};
