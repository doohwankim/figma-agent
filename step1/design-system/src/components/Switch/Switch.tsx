import React from 'react';
import styles from './Switch.module.css';

export type SwitchSize = 'sm' | 'md' | 'lg';

export interface SwitchProps {
  /** 켜짐/꺼짐 상태 */
  checked?: boolean;
  /** 스위치 크기 (Figma: lg, md, sm) */
  size?: SwitchSize;
  /** 비활성화 상태 */
  disabled?: boolean;
  /** 라벨 표시 여부 */
  showLabel?: boolean;
  /** 라벨 텍스트 (기본: ON/OFF) */
  labelOn?: string;
  /** 라벨 텍스트 (기본: ON/OFF) */
  labelOff?: string;
  /** 변경 이벤트 핸들러 */
  onChange?: (checked: boolean) => void;
  /** 추가 className */
  className?: string;
  /** name 속성 */
  name?: string;
}

export const Switch: React.FC<SwitchProps> = ({
  checked = false,
  size = 'md',
  disabled = false,
  showLabel = false,
  labelOn = 'ON',
  labelOff = 'OFF',
  onChange,
  className = '',
  name,
}) => {
  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleChange();
    }
  };

  const classNames = [
    styles.switch,
    styles[`size-${size}`],
    checked && styles.checked,
    disabled && styles.disabled,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames}>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        name={name}
        className={styles.input}
        role="switch"
        aria-checked={checked}
      />
      <button
        type="button"
        className={styles.track}
        onClick={handleChange}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        aria-pressed={checked}
        tabIndex={0}
      >
        <span className={styles.thumb} />
      </button>
      {showLabel && (
        <span className={styles.label}>
          {checked ? labelOn : labelOff}
        </span>
      )}
    </div>
  );
};

export default Switch;
