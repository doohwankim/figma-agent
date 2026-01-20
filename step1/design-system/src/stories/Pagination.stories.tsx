import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Pagination } from '../components/Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'MEDIGATE 디자인 시스템의 Pagination 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
      <div>
        <p style={{ marginBottom: '8px', fontWeight: 600, textAlign: 'center' }}>Large</p>
        <Pagination currentPage={5} totalPages={10} size="lg" />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontWeight: 600, textAlign: 'center' }}>Medium</p>
        <Pagination currentPage={5} totalPages={10} size="md" />
      </div>
      <div>
        <p style={{ marginBottom: '8px', fontWeight: 600, textAlign: 'center' }}>Small</p>
        <Pagination currentPage={5} totalPages={10} size="sm" />
      </div>
    </div>
  ),
};

export const FewPages: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
      <Pagination currentPage={1} totalPages={3} />
      <Pagination currentPage={2} totalPages={5} />
      <Pagination currentPage={3} totalPages={7} />
    </div>
  ),
};

export const ManyPages: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
      <Pagination currentPage={1} totalPages={20} />
      <Pagination currentPage={10} totalPages={20} />
      <Pagination currentPage={20} totalPages={20} />
    </div>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    return (
      <div style={{ textAlign: 'center' }}>
        <Pagination currentPage={page} totalPages={15} onChange={setPage} />
        <p style={{ marginTop: '16px', fontSize: '14px', color: '#6D767F' }}>
          현재 페이지: {page}
        </p>
      </div>
    );
  },
};
