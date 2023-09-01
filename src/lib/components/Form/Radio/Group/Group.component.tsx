import React from 'react';
import { Props as RadioProps } from '../Radio.types';
import Context from './Group.context';
import { Props } from './Group.types';
import './Group.styles.scss';

const Group = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    label,
    name,
    className,
    value,
    errorMessage,
    disabled,
    children,
    onChange,
    ...restProps
  } = props;

  const childrenNode = React.Children.toArray(children).filter((element) => React.isValidElement(element) && (element as React.FunctionComponentElement<RadioProps>).type.displayName === 'Radio');

  const handleTargetRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(event.target.value);
  };

  return (
    <div {...restProps} className={'brcm-radio-group' + (disabled ? ' brcm-radio-group--disabled' : '') + (errorMessage ? ' brcm-radio-group--invalid' : '') + (className ? ` ${className}` : '')} ref={ref}>
      <Context.Provider
        value={{
          name,
          value,
          disabled,
          onTargetRadioChange: handleTargetRadioChange
        }}
      >
        {label && <span className="brcm-radio-group__label">{label}</span>}
        <div className="brcm-radio-group__body">{childrenNode}</div>
        {(errorMessage && !disabled) && <span className="brcm-radio-group__error-message">{errorMessage}</span>}
      </Context.Provider>
    </div>
  );
});

Group.displayName = 'RadioGroup';

export default Group;
