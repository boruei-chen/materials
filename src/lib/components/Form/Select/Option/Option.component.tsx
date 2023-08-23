import React, { useContext } from 'react';
import SelectContext from '../Select.context';
import { Props } from './Option.types';

const Option = React.forwardRef<HTMLLIElement, Props>((props, ref) => {
  const {
    value,
    children,
    onClick,
    ...restProps
  } = props;

  const selectContext = useContext(SelectContext);
  const childrenNode = children;

  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    if (selectContext) selectContext.onVirtualOptionSelect({ value, option: children });
    if (onClick) onClick(event);
  };

  return (
    <li
      {...restProps}
      className={'brcm-select__virtual-option' + (selectContext?.activeOptionData?.value === value ? ' brcm-select__virtual-option--active' : '')}
      onClick={handleClick}
      ref={ref}
    >
      {childrenNode}
    </li>
  );
});

Option.displayName = 'SelectOption';

export default Option;
