import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Radio, RadioGroup } from '../components/Radio';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'MEDIGATE 디자인 시스템의 Radio 컴포넌트입니다. Figma 실제 값 100% 동기화.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '라디오 크기',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    label: 'Radio',
    size: 'md',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Radio size="lg" label="Large (24px)" checked />
      <Radio size="md" label="Medium (20px)" checked />
      <Radio size="sm" label="Small (16px)" checked />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Radio label="Unchecked" name="states" />
      <Radio label="Checked" name="states" checked />
      <Radio label="Disabled" name="states2" disabled />
      <Radio label="Disabled Checked" name="states2" disabled checked />
    </div>
  ),
};

export const RadioGroupExample: Story = {
  render: () => {
    const [value, setValue] = useState('option1');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <p style={{ marginBottom: '8px', fontWeight: 600 }}>Vertical (기본)</p>
          <RadioGroup
            name="vertical"
            value={value}
            onChange={setValue}
            options={[
              { value: 'option1', label: '옵션 1' },
              { value: 'option2', label: '옵션 2' },
              { value: 'option3', label: '옵션 3' },
            ]}
          />
        </div>
        <div>
          <p style={{ marginBottom: '8px', fontWeight: 600 }}>Horizontal</p>
          <RadioGroup
            name="horizontal"
            value={value}
            onChange={setValue}
            direction="horizontal"
            options={[
              { value: 'option1', label: '옵션 1' },
              { value: 'option2', label: '옵션 2' },
              { value: 'option3', label: '옵션 3' },
            ]}
          />
        </div>
      </div>
    );
  },
};
