import React from 'react';
import styles from './Badge.module.css';

export type BadgeType = 'default' | 'pill';
export type BadgeSize = 'tiny' | 'xs' | 'sm' | 'md';
export type BadgeColor =
  | 'primary'
  | 'primary-subtle'
  | 'secondary'
  | 'success'
  | 'success-subtle'
  | 'warning'
  | 'warning-subtle'
  | 'error'
  | 'error-subtle'
  | 'essential'
  | 'essential-subtle'
  | 'light'
  | 'tonal';

export interface BadgeProps {
  /** Badge 내부 텍스트 */
  children: React.ReactNode;
  /** Badge 타입 (default: 사각형, pill: 둥근 모양) */
  type?: BadgeType;
  /** Badge 크기 */
  size?: BadgeSize;
  /** Badge 색상 */
  color?: BadgeColor;
  /** 아이콘 위치 */
  icon?: 'prefix' | 'suffix' | 'only' | false;
  /** 아이콘 요소 */
  iconElement?: React.ReactNode;
  /** 추가 className */
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  type = 'default',
  size = 'sm',
  color = 'primary',
  icon = false,
  iconElement,
  className = '',
}) => {
  const classNames = [
    styles.badge,
    styles[`type-${type}`],
    styles[`size-${size}`],
    styles[`color-${color}`],
    icon && styles[`icon-${icon}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classNames}>
      {icon === 'prefix' && iconElement && (
        <span className={styles.iconWrapper}>{iconElement}</span>
      )}
      {icon !== 'only' && <span className={styles.text}>{children}</span>}
      {icon === 'only' && iconElement && (
        <span className={styles.iconWrapper}>{iconElement}</span>
      )}
      {icon === 'suffix' && iconElement && (
        <span className={styles.iconWrapper}>{iconElement}</span>
      )}
    </span>
  );
};

export default Badge;
