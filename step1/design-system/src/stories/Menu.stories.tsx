import type { Meta, StoryObj } from '@storybook/react';
import { Menu } from '../components/Menu';
import { Button } from '../components/Button';

const meta: Meta<typeof Menu> = {
  title: 'Components/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'MEDIGATE 디자인 시스템의 Menu 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Menu>;

const EditIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const CopyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const TrashIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
);

const menuItems = [
  { id: 'edit', label: '수정', icon: <EditIcon />, onClick: () => alert('수정') },
  { id: 'copy', label: '복사', icon: <CopyIcon />, onClick: () => alert('복사') },
  { id: 'divider1', label: '', divider: true },
  { id: 'delete', label: '삭제', icon: <TrashIcon />, danger: true, onClick: () => alert('삭제') },
];

export const Default: Story = {
  render: () => (
    <Menu
      trigger={<Button>메뉴 열기</Button>}
      items={menuItems}
    />
  ),
};

export const SimpleItems: Story = {
  render: () => (
    <Menu
      trigger={<Button variant="outlined">옵션</Button>}
      items={[
        { id: 'option1', label: '옵션 1' },
        { id: 'option2', label: '옵션 2' },
        { id: 'option3', label: '옵션 3' },
      ]}
    />
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Menu
      trigger={<Button>아이콘 메뉴</Button>}
      items={[
        { id: 'edit', label: '수정', icon: <EditIcon /> },
        { id: 'copy', label: '복사', icon: <CopyIcon /> },
        { id: 'delete', label: '삭제', icon: <TrashIcon /> },
      ]}
    />
  ),
};

export const WithDividers: Story = {
  render: () => (
    <Menu
      trigger={<Button>구분선 메뉴</Button>}
      items={[
        { id: 'item1', label: '항목 1' },
        { id: 'item2', label: '항목 2' },
        { id: 'divider1', label: '', divider: true },
        { id: 'item3', label: '항목 3' },
        { id: 'item4', label: '항목 4' },
        { id: 'divider2', label: '', divider: true },
        { id: 'item5', label: '항목 5', danger: true },
      ]}
    />
  ),
};

export const DisabledItems: Story = {
  render: () => (
    <Menu
      trigger={<Button>비활성화 항목</Button>}
      items={[
        { id: 'item1', label: '활성화' },
        { id: 'item2', label: '비활성화', disabled: true },
        { id: 'item3', label: '활성화' },
        { id: 'item4', label: '비활성화 (위험)', disabled: true, danger: true },
      ]}
    />
  ),
};

export const Positions: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Menu
        trigger={<Button variant="outlined">Bottom Start</Button>}
        items={[{ id: '1', label: 'Bottom Start' }]}
        position="bottom-start"
      />
      <Menu
        trigger={<Button variant="outlined">Bottom End</Button>}
        items={[{ id: '1', label: 'Bottom End' }]}
        position="bottom-end"
      />
    </div>
  ),
};

export const ContextMenuExample: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Menu
        trigger={
          <button style={{
            padding: '8px',
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="5" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="12" cy="19" r="2" />
            </svg>
          </button>
        }
        items={menuItems}
        position="bottom-end"
      />
    </div>
  ),
};
