import React, { forwardRef } from 'react';
import styles from './TextArea.module.css';

export type TextAreaSize = 'sm' | 'md' | 'lg';

export interface TextAreaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  /** 크기 */
  size?: TextAreaSize;
  /** 라벨 */
  label?: string;
  /** 도움말 텍스트 */
  helperText?: string;
  /** 에러 메시지 */
  errorMessage?: string;
  /** 전체 너비 */
  fullWidth?: boolean;
  /** 리사이즈 가능 여부 */
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
  /** 추가 className */
  className?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({
  size = 'md',
  label,
  helperText,
  errorMessage,
  fullWidth = false,
  resize = 'vertical',
  disabled,
  className = '',
  ...props
}, ref) => {
  const hasError = !!errorMessage;
  const message = errorMessage || helperText;

  const containerClassNames = [
    styles.container,
    fullWidth && styles.fullWidth,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const textareaClassNames = [
    styles.textarea,
    styles[`size-${size}`],
    hasError && styles.error,
    disabled && styles.disabled,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerClassNames}>
      {label && <label className={styles.label}>{label}</label>}
      <textarea
        ref={ref}
        disabled={disabled}
        className={textareaClassNames}
        style={{ resize }}
        {...props}
      />
      {message && (
        <span className={`${styles.message} ${hasError ? styles.messageError : ''}`}>
          {message}
        </span>
      )}
    </div>
  );
});

TextArea.displayName = 'TextArea';

export default TextArea;
