import React, { useContext } from 'react';
import { Props } from './Radio.types';
import Group from './Group';
import GroupContext from './Group/Group.context';
import './Radio.styles.scss';

const Radio = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
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
    if (groupContext) groupContext.onTargetRadioChange(event);
    if (onChange) onChange(event);
  };

  return (
    <div className={'brcm-radio' + (direction ? ` brcm-radio--direction-${direction}` : '') + (className ? ` ${className}` : '')}>
      <label className="brcm-radio__wrapper">
        <input
          {...restProps}
          type="radio"
          name={groupContext?.name ?? name}
          className="brcm-radio__radio"
          value={value}
          checked={groupContext?.value ? groupContext.value === value : checked}
          disabled={groupContext?.disabled ?? disabled}
          onChange={handleChange}
          ref={ref}
        />
        <div className="brcm-radio__virtual-radio" />
        {(label || childrenNode) && <div className="brcm-radio__label">{label || childrenNode}</div>}
      </label>
    </div>
  );
});

Radio.displayName = 'Radio';

export default Object.assign(Radio, { Group });
