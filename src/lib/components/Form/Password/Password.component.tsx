import React, { useState } from 'react';
import { Props, MaskEnum } from './Password.types';
import './Password.styles.scss';

const Password = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    variant = 'outline',
    label,
    className,
    toggleMask = false,
    errorMessage,
    disabled,
    ...restProps
  } = props;

  const [maskState, setMaskState] = useState<MaskEnum>(MaskEnum.Protected);

  const handleToggleMask = () => {
    setMaskState((prevState) => prevState === MaskEnum.Protected ? MaskEnum.Public : MaskEnum.Protected);
  };

  return (
    <div className={'brcm-password' + (variant ? ` brcm-password--variant-${variant}` : '') + (disabled ? ' brcm-password--disabled' : '') + (errorMessage ? ' brcm-password--invalid' : '') + (className ? ` ${className}` : '')}>
      <label className="brcm-password__wrapper">
        {label && <span className="brcm-password__label">{label}</span>}
        <div className="brcm-password__input-wrapper">
          <input {...restProps} type={maskState === MaskEnum.Protected ? 'password' : 'text'} className="brcm-password__input" disabled={disabled} ref={ref} />
          {toggleMask && <button type="button" className={'brcm-password__toggle-mask-btn' + (maskState ? ` brcm-password__toggle-mask-btn--${maskState}` : '')} onClick={handleToggleMask} disabled={disabled} />}
        </div>
      </label>
      {(errorMessage && !disabled) && <span className="brcm-password__error-message">{errorMessage}</span>}
    </div>
  );
});

Password.displayName = 'Password';

export default Password;
