import React from 'react';
import styles from './Divider.module.css';

export type DividerOrientation = 'horizontal' | 'vertical';
export type DividerVariant = 'solid' | 'dashed';
export type DividerColor = 'light' | 'dark';

export interface DividerProps {
  /** 방향 */
  orientation?: DividerOrientation;
  /** 스타일 변형 */
  variant?: DividerVariant;
  /** 색상 */
  color?: DividerColor;
  /** 여백 (px) */
  spacing?: number;
  /** 추가 className */
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  variant = 'solid',
  color = 'light',
  spacing = 0,
  className = '',
}) => {
  const classNames = [
    styles.divider,
    styles[orientation],
    styles[variant],
    styles[`color-${color}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const style: React.CSSProperties = {
    ...(orientation === 'horizontal' && spacing > 0 && { margin: `${spacing}px 0` }),
    ...(orientation === 'vertical' && spacing > 0 && { margin: `0 ${spacing}px` }),
  };

  return <div className={classNames} style={style} role="separator" aria-orientation={orientation} />;
};

export default Divider;
