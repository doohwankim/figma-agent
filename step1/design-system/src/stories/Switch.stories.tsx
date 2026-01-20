import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Switch } from '../components/Switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'MEDIGATE 디자인 시스템의 Switch 컴포넌트입니다. Figma 실제 값 100% 동기화.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '스위치 크기',
    },
    checked: {
      control: 'boolean',
      description: '켜짐/꺼짐 상태',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태',
    },
    showLabel: {
      control: 'boolean',
      description: '라벨 표시 여부',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    size: 'md',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
      <Switch size="lg" checked />
      <Switch size="md" checked />
      <Switch size="sm" checked />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Switch />
        <span>Off</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Switch checked />
        <span>On</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Switch disabled />
        <span>Disabled Off</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Switch disabled checked />
        <span>Disabled On</span>
      </div>
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Switch showLabel checked={checked} onChange={setChecked} />
        <Switch showLabel labelOn="켜짐" labelOff="꺼짐" checked={checked} onChange={setChecked} />
      </div>
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '200px' }}>
          <span>알림</span>
          <Switch checked={notifications} onChange={setNotifications} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '200px' }}>
          <span>다크 모드</span>
          <Switch checked={darkMode} onChange={setDarkMode} />
        </div>
      </div>
    );
  },
};
