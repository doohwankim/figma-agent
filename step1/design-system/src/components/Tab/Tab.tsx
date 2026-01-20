import React, { useState } from 'react';
import styles from './Tab.module.css';

export type TabSize = 'sm' | 'md' | 'lg';
export type TabVariant = 'line' | 'enclosed' | 'pills';

export interface TabItem {
  id: string;
  label: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export interface TabProps {
  /** 탭 아이템 목록 */
  items: TabItem[];
  /** 선택된 탭 ID */
  activeId?: string;
  /** 크기 */
  size?: TabSize;
  /** 스타일 변형 */
  variant?: TabVariant;
  /** 전체 너비 */
  fullWidth?: boolean;
  /** 탭 변경 이벤트 */
  onChange?: (id: string) => void;
  /** 추가 className */
  className?: string;
}

export const Tab: React.FC<TabProps> = ({
  items,
  activeId,
  size = 'md',
  variant = 'line',
  fullWidth = false,
  onChange,
  className = '',
}) => {
  const [internalActiveId, setInternalActiveId] = useState(activeId || items[0]?.id);
  const currentActiveId = activeId !== undefined ? activeId : internalActiveId;

  const handleTabClick = (id: string, disabled?: boolean) => {
    if (disabled) return;

    if (activeId === undefined) {
      setInternalActiveId(id);
    }
    onChange?.(id);
  };

  const containerClassNames = [
    styles.tabs,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    fullWidth && styles.fullWidth,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerClassNames} role="tablist">
      {items.map((item) => {
        const isActive = item.id === currentActiveId;
        const tabClassNames = [
          styles.tab,
          isActive && styles.active,
          item.disabled && styles.disabled,
        ]
          .filter(Boolean)
          .join(' ');

        return (
          <button
            key={item.id}
            className={tabClassNames}
            onClick={() => handleTabClick(item.id, item.disabled)}
            role="tab"
            aria-selected={isActive}
            aria-disabled={item.disabled}
            tabIndex={item.disabled ? -1 : 0}
          >
            {item.icon && <span className={styles.icon}>{item.icon}</span>}
            <span className={styles.label}>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export interface TabPanelProps {
  /** 패널 ID (탭 ID와 매칭) */
  id: string;
  /** 현재 활성 탭 ID */
  activeId: string;
  /** 패널 내용 */
  children: React.ReactNode;
  /** 추가 className */
  className?: string;
}

export const TabPanel: React.FC<TabPanelProps> = ({
  id,
  activeId,
  children,
  className = '',
}) => {
  if (id !== activeId) return null;

  return (
    <div
      className={`${styles.panel} ${className}`}
      role="tabpanel"
      aria-labelledby={id}
    >
      {children}
    </div>
  );
};

export default Tab;
