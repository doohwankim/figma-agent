import React, { forwardRef } from 'react';
import styles from './Input.module.css';

export type InputSize = 'sm' | 'md' | 'lg';
export type InputState = 'default' | 'error' | 'success';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** 인풋 크기 */
  size?: InputSize;
  /** 인풋 상태 */
  state?: InputState;
  /** 라벨 */
  label?: string;
  /** 도움말 텍스트 */
  helperText?: string;
  /** 에러 메시지 */
  errorMessage?: string;
  /** 성공 메시지 */
  successMessage?: string;
  /** 전체 너비 */
  fullWidth?: boolean;
  /** 왼쪽 아이콘 */
  leftIcon?: React.ReactNode;
  /** 오른쪽 아이콘 */
  rightIcon?: React.ReactNode;
  /** 추가 className */
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  size = 'md',
  state = 'default',
  label,
  helperText,
  errorMessage,
  successMessage,
  fullWidth = false,
  leftIcon,
  rightIcon,
  disabled,
  className = '',
  ...props
}, ref) => {
  const currentState = errorMessage ? 'error' : successMessage ? 'success' : state;
  const message = errorMessage || successMessage || helperText;

  const containerClassNames = [
    styles.container,
    fullWidth && styles.fullWidth,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const inputWrapperClassNames = [
    styles.inputWrapper,
    styles[`size-${size}`],
    styles[`state-${currentState}`],
    disabled && styles.disabled,
    leftIcon && styles.hasLeftIcon,
    rightIcon && styles.hasRightIcon,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerClassNames}>
      {label && (
        <label className={styles.label}>
          {label}
        </label>
      )}
      <div className={inputWrapperClassNames}>
        {leftIcon && <span className={styles.leftIcon}>{leftIcon}</span>}
        <input
          ref={ref}
          disabled={disabled}
          className={styles.input}
          {...props}
        />
        {rightIcon && <span className={styles.rightIcon}>{rightIcon}</span>}
      </div>
      {message && (
        <span className={`${styles.message} ${styles[`message-${currentState}`]}`}>
          {message}
        </span>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
