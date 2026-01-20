import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Menu.module.css';

export interface MenuItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  danger?: boolean;
  divider?: boolean;
  onClick?: () => void;
}

export interface MenuProps {
  /** 메뉴 아이템 */
  items: MenuItem[];
  /** 트리거 요소 */
  trigger: React.ReactElement;
  /** 메뉴 위치 */
  position?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';
  /** 추가 className */
  className?: string;
}

export const Menu: React.FC<MenuProps> = ({
  items,
  trigger,
  position = 'bottom-start',
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const calculatePosition = () => {
    if (!triggerRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const offset = 4;

    let top = 0;
    let left = 0;

    switch (position) {
      case 'bottom-start':
        top = triggerRect.bottom + offset;
        left = triggerRect.left;
        break;
      case 'bottom-end':
        top = triggerRect.bottom + offset;
        left = triggerRect.right;
        break;
      case 'top-start':
        top = triggerRect.top - offset;
        left = triggerRect.left;
        break;
      case 'top-end':
        top = triggerRect.top - offset;
        left = triggerRect.right;
        break;
    }

    setCoords({ top, left });
  };

  useEffect(() => {
    if (isOpen) {
      calculatePosition();
    }
  }, [isOpen, position]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleItemClick = (item: MenuItem) => {
    if (item.disabled) return;
    item.onClick?.();
    setIsOpen(false);
  };

  const menuStyle: React.CSSProperties = {
    top: coords.top,
    left: position.endsWith('end') ? 'auto' : coords.left,
    right: position.endsWith('end') ? window.innerWidth - coords.left : 'auto',
    transform: position.startsWith('top') ? 'translateY(-100%)' : undefined,
  };

  return (
    <>
      <div
        ref={triggerRef}
        className={styles.trigger}
        onClick={() => setIsOpen(!isOpen)}
      >
        {trigger}
      </div>
      {isOpen &&
        createPortal(
          <div
            ref={menuRef}
            className={`${styles.menu} ${className}`}
            style={menuStyle}
            role="menu"
          >
            {items.map((item, index) => {
              if (item.divider) {
                return <div key={`divider-${index}`} className={styles.divider} />;
              }

              return (
                <button
                  key={item.id}
                  className={`${styles.item} ${item.disabled ? styles.disabled : ''} ${item.danger ? styles.danger : ''}`}
                  onClick={() => handleItemClick(item)}
                  disabled={item.disabled}
                  role="menuitem"
                >
                  {item.icon && <span className={styles.icon}>{item.icon}</span>}
                  <span className={styles.label}>{item.label}</span>
                </button>
              );
            })}
          </div>,
          document.body
        )}
    </>
  );
};

export default Menu;
