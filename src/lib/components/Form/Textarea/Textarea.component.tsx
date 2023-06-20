import React, { useState } from 'react';
import { Props } from './Textarea.types';
import './Textarea.styles.scss';

const Textarea = React.forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
  const {
    variant = 'outline',
    label,
    className,
    displayCount = false,
    cols = 30,
    rows = 10,
    maxLength,
    value,
    errorMessage,
    disabled,
    onChange,
    ...restProps
  } = props;

  const [wordCountState, setWordCountState] = useState<number>(value ? String(value).length : 0);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) onChange(event);
    setWordCountState(event.target.value.length);
  };

  return (
    <div className={'brcm-textarea' + (variant ? ` brcm-textarea--variant-${variant}` : '') + (disabled ? ' brcm-textarea--disabled' : '') + (errorMessage ? ' brcm-textarea--invalid' : '') + (className ? ` ${className}` : '')}>
      <label className="brcm-textarea__wrapper">
        {label && <span className="brcm-textarea__label">{label}</span>}
        <textarea
          {...restProps}
          className="brcm-textarea__textarea"
          cols={cols}
          rows={rows}
          maxLength={maxLength}
          value={value}
          disabled={disabled}
          onChange={handleChange}
          ref={ref}
        />
        {displayCount && (
          <div className="brcm-textarea__word-count">
            <span>{wordCountState}</span>
            {maxLength && <span>/{maxLength}</span>}
          </div>
        )}
      </label>
      {(errorMessage && !disabled) && <span className="brcm-textarea__error-message">{errorMessage}</span>}
    </div>
  );
});

Textarea.displayName = 'Textarea';

export default Textarea;
