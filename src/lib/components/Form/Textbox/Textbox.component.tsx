import React from 'react';
import { Props } from './Textbox.types';
import './Textbox.styles.scss';

const Textbox = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    variant = 'outline',
    label,
    className,
    errorMessage,
    disabled,
    ...restProps
  } = props;

  return (
    <div className={'brcm-textbox' + (variant ? ` brcm-textbox--variant-${variant}` : '') + (disabled ? ' brcm-textbox--disabled' : '') + (errorMessage ? ' brcm-textbox--invalid' : '') + (className ? ` ${className}` : '')}>
      <label className="brcm-textbox__wrapper">
        {label && <span className="brcm-textbox__label">{label}</span>}
        <input {...restProps} type="text" className="brcm-textbox__input" disabled={disabled} ref={ref} />
      </label>
      {(errorMessage && !disabled) && <span className="brcm-textbox__error-message">{errorMessage}</span>}
    </div>
  );
});

Textbox.displayName = 'Textbox';

export default Textbox;
