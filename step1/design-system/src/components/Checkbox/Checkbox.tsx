import React from 'react';
import styles from './Checkbox.module.css';

export type CheckboxSize = 'sm' | 'md' | 'lg';

export interface CheckboxProps {
  /** 체크 상태 */
  checked?: boolean;
  /** 체크박스 크기 (Figma: lg 24px, md 20px, sm 16px) */
  size?: CheckboxSize;
  /** 비활성화 상태 */
  disabled?: boolean;
  /** 라벨 텍스트 */
  label?: string;
  /** 변경 이벤트 핸들러 */
  onChange?: (checked: boolean) => void;
  /** 추가 className */
  className?: string;
  /** name 속성 */
  name?: string;
  /** value 속성 */
  value?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  size = 'md',
  disabled = false,
  label,
  onChange,
  className = '',
  name,
  value,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && onChange) {
      onChange(e.target.checked);
    }
  };

  const classNames = [
    styles.checkbox,
    styles[`size-${size}`],
    checked && styles.checked,
    disabled && styles.disabled,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <label className={classNames}>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        name={name}
        value={value}
        className={styles.input}
      />
      <span className={styles.checkmark}>
        {checked && (
          <svg viewBox="0 0 24 24" fill="none" className={styles.icon}>
            <path
              d="M20 6L9 17L4 12"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
};

export default Checkbox;
