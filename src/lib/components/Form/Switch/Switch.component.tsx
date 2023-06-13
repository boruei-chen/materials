import React from 'react';
import { Props } from './Switch.types';
import './Switch.styles.scss';

const Switch = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    label,
    className,
    direction = 'row',
    ...restProps
  } = props;

  return (
    <div className={'brcm-switch' + (direction ? ` brcm-switch--direction-${direction}` : '') + (className ? ` ${className}` : '')}>
      <label className="brcm-switch__wrapper">
        <input {...restProps} type="checkbox" className="brcm-switch__checkbox" ref={ref} />
        <div className="brcm-switch__btn" />
        {label && <span className="brcm-switch__label">{label}</span>}
      </label>
    </div>
  );
});

Switch.displayName = 'Switch';

export default Switch;
