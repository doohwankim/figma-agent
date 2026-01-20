import React from 'react';
import styles from './Radio.module.css';

export type RadioSize = 'sm' | 'md' | 'lg';

export interface RadioProps {
  /** 선택 상태 */
  checked?: boolean;
  /** 라디오 크기 (Figma: lg 24px, md 20px, sm 16px) */
  size?: RadioSize;
  /** 비활성화 상태 */
  disabled?: boolean;
  /** 라벨 텍스트 */
  label?: string;
  /** 변경 이벤트 핸들러 */
  onChange?: (checked: boolean) => void;
  /** 추가 className */
  className?: string;
  /** name 속성 (라디오 그룹) */
  name?: string;
  /** value 속성 */
  value?: string;
}

export const Radio: React.FC<RadioProps> = ({
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
    styles.radio,
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
        type="radio"
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        name={name}
        value={value}
        className={styles.input}
      />
      <span className={styles.radiomark}>
        {checked && <span className={styles.dot} />}
      </span>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
};

export interface RadioGroupProps {
  /** 라디오 그룹 이름 */
  name: string;
  /** 선택된 값 */
  value?: string;
  /** 옵션 목록 */
  options: Array<{ value: string; label: string; disabled?: boolean }>;
  /** 크기 */
  size?: RadioSize;
  /** 방향 */
  direction?: 'horizontal' | 'vertical';
  /** 변경 이벤트 핸들러 */
  onChange?: (value: string) => void;
  /** 추가 className */
  className?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  value,
  options,
  size = 'md',
  direction = 'vertical',
  onChange,
  className = '',
}) => {
  const handleChange = (optionValue: string) => {
    if (onChange) {
      onChange(optionValue);
    }
  };

  return (
    <div className={`${styles.radioGroup} ${styles[direction]} ${className}`}>
      {options.map((option) => (
        <Radio
          key={option.value}
          name={name}
          value={option.value}
          label={option.label}
          checked={value === option.value}
          disabled={option.disabled}
          size={size}
          onChange={() => handleChange(option.value)}
        />
      ))}
    </div>
  );
};

export default Radio;
