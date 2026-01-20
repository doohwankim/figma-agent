import React, { useState, useRef, useEffect } from 'react';
import styles from './Select.module.css';

export type SelectSize = 'sm' | 'md' | 'lg';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  /** 옵션 목록 */
  options: SelectOption[];
  /** 선택된 값 */
  value?: string;
  /** 플레이스홀더 */
  placeholder?: string;
  /** 크기 */
  size?: SelectSize;
  /** 비활성화 */
  disabled?: boolean;
  /** 전체 너비 */
  fullWidth?: boolean;
  /** 라벨 */
  label?: string;
  /** 에러 상태 */
  error?: boolean;
  /** 에러 메시지 */
  errorMessage?: string;
  /** 변경 이벤트 */
  onChange?: (value: string) => void;
  /** 추가 className */
  className?: string;
  /** name 속성 */
  name?: string;
}

export const Select: React.FC<SelectProps> = ({
  options,
  value,
  placeholder = '선택하세요',
  size = 'md',
  disabled = false,
  fullWidth = false,
  label,
  error = false,
  errorMessage,
  onChange,
  className = '',
  name,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(opt => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (optionValue: string) => {
    if (onChange) {
      onChange(optionValue);
    }
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsOpen(!isOpen);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const containerClassNames = [
    styles.container,
    fullWidth && styles.fullWidth,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const selectClassNames = [
    styles.select,
    styles[`size-${size}`],
    isOpen && styles.open,
    error && styles.error,
    disabled && styles.disabled,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerClassNames} ref={containerRef}>
      {label && <label className={styles.label}>{label}</label>}
      <input type="hidden" name={name} value={value || ''} />
      <div
        className={selectClassNames}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        tabIndex={disabled ? -1 : 0}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-disabled={disabled}
      >
        <span className={`${styles.value} ${!selectedOption ? styles.placeholder : ''}`}>
          {selectedOption?.label || placeholder}
        </span>
        <span className={styles.arrow}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </div>

      {isOpen && (
        <ul className={styles.dropdown} role="listbox">
          {options.map((option) => (
            <li
              key={option.value}
              className={`${styles.option} ${option.value === value ? styles.selected : ''} ${option.disabled ? styles.optionDisabled : ''}`}
              onClick={() => !option.disabled && handleSelect(option.value)}
              role="option"
              aria-selected={option.value === value}
              aria-disabled={option.disabled}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}

      {errorMessage && <span className={styles.errorMessage}>{errorMessage}</span>}
    </div>
  );
};

export default Select;
