import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal } from '../components/Modal';
import { Button } from '../components/Button';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'MEDIGATE 디자인 시스템의 Modal 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>모달 열기</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="모달 제목"
        >
          <p>모달 내용입니다. 이 영역에 원하는 콘텐츠를 넣을 수 있습니다.</p>
        </Modal>
      </>
    );
  },
};

export const WithFooter: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>모달 열기</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="확인"
          footer={
            <>
              <Button variant="outlined" color="essential" onClick={() => setIsOpen(false)}>
                취소
              </Button>
              <Button onClick={() => setIsOpen(false)}>
                확인
              </Button>
            </>
          }
        >
          <p>저장하시겠습니까?</p>
        </Modal>
      </>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [size, setSize] = useState<'sm' | 'md' | 'lg' | 'xl' | null>(null);
    return (
      <>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Button onClick={() => setSize('sm')}>Small</Button>
          <Button onClick={() => setSize('md')}>Medium</Button>
          <Button onClick={() => setSize('lg')}>Large</Button>
          <Button onClick={() => setSize('xl')}>XLarge</Button>
        </div>
        {size && (
          <Modal
            isOpen={true}
            onClose={() => setSize(null)}
            title={`${size.toUpperCase()} 모달`}
            size={size}
          >
            <p>이것은 {size} 크기의 모달입니다.</p>
            <p style={{ marginTop: '16px' }}>
              모달 크기: sm (400px), md (560px), lg (720px), xl (960px)
            </p>
          </Modal>
        )}
      </>
    );
  },
};

export const NoCloseButton: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>모달 열기</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="닫기 버튼 없음"
          showCloseButton={false}
          closeOnOverlayClick={false}
          footer={
            <Button onClick={() => setIsOpen(false)}>확인</Button>
          }
        >
          <p>닫기 버튼이 없습니다. 버튼을 클릭하여 닫으세요.</p>
        </Modal>
      </>
    );
  },
};

export const LongContent: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>긴 내용 모달</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="이용약관"
          footer={
            <Button onClick={() => setIsOpen(false)}>동의</Button>
          }
        >
          <div>
            {Array.from({ length: 20 }).map((_, i) => (
              <p key={i} style={{ marginBottom: '16px' }}>
                제 {i + 1}조: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            ))}
          </div>
        </Modal>
      </>
    );
  },
};
