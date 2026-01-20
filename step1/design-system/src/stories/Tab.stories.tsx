import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Tab, TabPanel } from '../components/Tab';

const meta: Meta<typeof Tab> = {
  title: 'Components/Tab',
  component: Tab,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'MEDIGATE 디자인 시스템의 Tab 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tab>;

const tabItems = [
  { id: 'tab1', label: '탭 1' },
  { id: 'tab2', label: '탭 2' },
  { id: 'tab3', label: '탭 3' },
  { id: 'tab4', label: '탭 4 (비활성화)', disabled: true },
];

export const Default: Story = {
  args: {
    items: tabItems,
    activeId: 'tab1',
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <p style={{ marginBottom: '8px', fontWeight: 600 }}>Line (기본)</p>
        <Tab items={tabItems} variant="line" activeId="tab1" />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontWeight: 600 }}>Enclosed</p>
        <Tab items={tabItems} variant="enclosed" activeId="tab1" />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontWeight: 600 }}>Pills</p>
        <Tab items={tabItems} variant="pills" activeId="tab1" />
      </div>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <p style={{ marginBottom: '8px', fontWeight: 600 }}>Large</p>
        <Tab items={tabItems} size="lg" activeId="tab1" />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontWeight: 600 }}>Medium</p>
        <Tab items={tabItems} size="md" activeId="tab1" />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontWeight: 600 }}>Small</p>
        <Tab items={tabItems} size="sm" activeId="tab1" />
      </div>
    </div>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <div style={{ width: '500px' }}>
      <Tab items={tabItems} fullWidth activeId="tab1" />
    </div>
  ),
};

export const WithPanel: Story = {
  render: () => {
    const [activeId, setActiveId] = useState('tab1');
    return (
      <div style={{ width: '400px' }}>
        <Tab items={tabItems} activeId={activeId} onChange={setActiveId} />
        <TabPanel id="tab1" activeId={activeId}>
          <p>탭 1의 내용입니다.</p>
        </TabPanel>
        <TabPanel id="tab2" activeId={activeId}>
          <p>탭 2의 내용입니다.</p>
        </TabPanel>
        <TabPanel id="tab3" activeId={activeId}>
          <p>탭 3의 내용입니다.</p>
        </TabPanel>
      </div>
    );
  },
};
