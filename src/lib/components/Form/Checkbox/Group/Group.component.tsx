import React, { useState } from 'react';
import { Props as CheckboxProps } from '../Checkbox.types';
import Context from './Group.context';
import { Props } from './Group.types';
import './Group.styles.scss';

const Group = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    label,
    name,
    className,
    values,
    errorMessage,
    disabled,
    children,
    onChange,
    ...restProps
  } = props;

  const [valuesState, setValuesState] = useState<CheckboxProps['value'][]>(values ?? []);
  const childrenNode = React.Children.toArray(children).filter((element) => React.isValidElement(element) && (element as React.FunctionComponentElement<CheckboxProps>).type.displayName === 'Checkbox');

  const handleTargetCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const values = !valuesState.includes(event.target.value) ? valuesState.concat(event.target.value) : valuesState.filter((value) => value !== event.target.value);
    setValuesState(values);
    if (onChange) onChange(values);
  };

  return (
    <div {...restProps} className={'brcm-checkbox-group' + (disabled ? ' brcm-checkbox-group--disabled' : '') + (errorMessage ? ' brcm-checkbox-group--invalid' : '') + (className ? ` ${className}` : '')} ref={ref}>
      <Context.Provider
        value={{
          name,
          values: valuesState,
          disabled,
          onTargetCheckboxChange: handleTargetCheckboxChange
        }}
      >
        {label && <span className="brcm-checkbox-group__label">{label}</span>}
        <div className="brcm-checkbox-group__body">{childrenNode}</div>
        {(errorMessage && !disabled) && <span className="brcm-checkbox-group__error-message">{errorMessage}</span>}
      </Context.Provider>
    </div>
  );
});

Group.displayName = 'CheckboxGroup';

export default Group;
