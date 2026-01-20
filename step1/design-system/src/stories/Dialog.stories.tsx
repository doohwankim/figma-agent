import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Dialog } from '../components/Dialog';
import { Button } from '../components/Button';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'MEDIGATE 디자인 시스템의 Dialog 컴포넌트입니다. 알림, 확인 등에 사용합니다.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Info: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Info Dialog</Button>
        <Dialog
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          type="info"
          title="안내"
          description="이것은 정보 안내 다이얼로그입니다."
        />
      </>
    );
  },
};

export const Success: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button color="success" onClick={() => setIsOpen(true)}>Success Dialog</Button>
        <Dialog
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          type="success"
          title="성공"
          description="작업이 성공적으로 완료되었습니다."
        />
      </>
    );
  },
};

export const Warning: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button color="warning" onClick={() => setIsOpen(true)}>Warning Dialog</Button>
        <Dialog
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          type="warning"
          title="경고"
          description="이 작업은 되돌릴 수 없습니다."
        />
      </>
    );
  },
};

export const Error: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button color="error" onClick={() => setIsOpen(true)}>Error Dialog</Button>
        <Dialog
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          type="error"
          title="오류"
          description="작업 중 오류가 발생했습니다. 다시 시도해주세요."
        />
      </>
    );
  },
};

export const Confirm: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [result, setResult] = useState<string>('');
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Confirm Dialog</Button>
        {result && <p style={{ marginTop: '8px' }}>결과: {result}</p>}
        <Dialog
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          type="confirm"
          title="삭제 확인"
          description="정말 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다."
          confirmText="삭제"
          cancelText="취소"
          onConfirm={() => setResult('삭제됨')}
          onCancel={() => setResult('취소됨')}
        />
      </>
    );
  },
};

export const AllTypes: Story = {
  render: () => {
    const [openType, setOpenType] = useState<string | null>(null);
    return (
      <>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Button onClick={() => setOpenType('info')}>Info</Button>
          <Button color="success" onClick={() => setOpenType('success')}>Success</Button>
          <Button color="warning" onClick={() => setOpenType('warning')}>Warning</Button>
          <Button color="error" onClick={() => setOpenType('error')}>Error</Button>
          <Button variant="outlined" onClick={() => setOpenType('confirm')}>Confirm</Button>
        </div>

        {openType && (
          <Dialog
            isOpen={true}
            onClose={() => setOpenType(null)}
            type={openType as any}
            title={`${openType.charAt(0).toUpperCase() + openType.slice(1)} Dialog`}
            description={`이것은 ${openType} 타입의 다이얼로그입니다.`}
            showCancel={openType === 'confirm'}
          />
        )}
      </>
    );
  },
};
