import React, { useContext } from 'react';
import { Props } from './Checkbox.types';
import Group from './Group';
import GroupContext from './Group/Group.context';
import './Checkbox.styles.scss';

const Checkbox = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    label,
    name,
    className,
    direction = 'row',
    value,
    checked,
    disabled,
    children,
    onChange,
    ...restProps
  } = props;

  const groupContext = useContext(GroupContext);
  const childrenNode = children;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (groupContext) groupContext.onTargetCheckboxChange(event);
    if (onChange) onChange(event);
  };

  return (
    <div className={'brcm-checkbox' + (direction ? ` brcm-checkbox--direction-${direction}` : '') + (className ? ` ${className}` : '')}>
      <label className="brcm-checkbox__wrapper">
        <input
          {...restProps}
          type="checkbox"
          name={groupContext?.name ?? name}
          className="brcm-checkbox__checkbox"
          value={value}
          checked={groupContext?.values.includes(value) ?? checked}
          disabled={groupContext?.disabled ?? disabled}
          onChange={handleChange}
          ref={ref}
        />
        <div className="brcm-checkbox__virtual-checkbox" />
        {(label || childrenNode) && <div className="brcm-checkbox__label">{label || childrenNode}</div>}
      </label>
    </div>
  );
});

Checkbox.displayName = 'Checkbox';

export default Object.assign(Checkbox, { Group });
