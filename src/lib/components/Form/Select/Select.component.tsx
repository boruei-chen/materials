import React, { useRef, useState, useEffect } from 'react';
import { Props, ChangeEvent } from './Select.types';
import Context from './Select.context';
import Option from './Option';
import { Props as OptionProps, OptionData } from './Option/Option.types';
import './Select.styles.scss';

const Select = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    variant = 'outline',
    label,
    className,
    value,
    placeholder,
    errorMessage,
    disabled,
    children,
    onChange,
    onFocus,
    ...restProps
  } = props;

  const isMountedRef = useRef<boolean>(false);
  const fieldElementRef = useRef<HTMLDivElement>(null);
  const virtualOptionPanelElementRef = useRef<HTMLDivElement>(null);
  const [virtualOptionPanelVisibleState, setVirtualOptionPanelVisibleState] = useState<boolean>(false);
  const [activeOptionDataState, setActiveOptionDataState] = useState<OptionData>();
  const childrenNode = React.Children.toArray(children).filter((element) => React.isValidElement(element) && (element as React.FunctionComponentElement<OptionProps>).type.displayName === 'SelectOption');

  useEffect(() => {
    document.addEventListener('mousedown', handleVirtualOptionPanelOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleVirtualOptionPanelOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (!isMountedRef.current) {
      const virtualOptionElementList = React.Children.toArray(children).filter((element) => React.isValidElement(element) && (element as React.FunctionComponentElement<OptionProps>).type.displayName === 'SelectOption');
      const activeVirtualOptionElement = virtualOptionElementList.find((element) => React.isValidElement<OptionProps>(element) && element.props.value === value);
      if (React.isValidElement<OptionProps>(activeVirtualOptionElement)) {
        const activeOptionData: OptionData = {
          value: activeVirtualOptionElement.props.value,
          option: activeVirtualOptionElement.props.children
        };
        setActiveOptionDataState(activeOptionData);
      }
      isMountedRef.current = true;
    }
  }, [value, children]);

  const handleFieldFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setVirtualOptionPanelVisibleState(true);
    if (onFocus) onFocus(event);
  };

  const handleVirtualOptionPanelOutsideClick = (event: MouseEvent) => {
    if (
      (fieldElementRef.current && !fieldElementRef.current.contains(event.target as Node)) &&
      (virtualOptionPanelElementRef.current && !virtualOptionPanelElementRef.current.contains(event.target as Node))
    ) {
      setVirtualOptionPanelVisibleState(false);
    }
  };

  const handleVirtualOptionSelect = (event: ChangeEvent) => {
    const activeOptionData: OptionData = {
      value: event.value,
      option: event.option
    };
    setActiveOptionDataState(activeOptionData);
    setVirtualOptionPanelVisibleState(false);
    if (onChange) onChange(event);
  };

  return (
    <div className={'brcm-select' + (variant ? ` brcm-select--variant-${variant}` : '') + (disabled ? ' brcm-select--disabled' : '') + (errorMessage ? ' brcm-select--invalid' : '') + (className ? ` ${className}` : '')}>
      <Context.Provider
        value={{
          activeOptionData: activeOptionDataState,
          onVirtualOptionSelect: handleVirtualOptionSelect
        }}
      >
        <label className="brcm-select__wrapper">
          {label && <span className="brcm-select__label">{label}</span>}
          <div className="brcm-select__field" ref={fieldElementRef}>
            <input
              {...restProps}
              type="text"
              className="brcm-select__input"
              onFocus={handleFieldFocus}
              disabled={disabled}
              readOnly
              ref={ref}
            />
            <div className="brcm-select__virtual-input">
              {activeOptionDataState
                ? <div className="brcm-select__virtual-input-value">{activeOptionDataState.option}</div>
                : <span className="brcm-select__virtual-input-placeholder">{placeholder}</span>}
            </div>
          </div>
        </label>
        <div className={'brcm-select__virtual-option-panel' + (virtualOptionPanelVisibleState ? ' brcm-select__virtual-option-panel--visible' : ' brcm-select__virtual-option-panel--hidden')} ref={virtualOptionPanelElementRef}>
          <ul className="brcm-select__virtual-option-list">
            {childrenNode}
          </ul>
        </div>
        {(errorMessage && !disabled) && <span className="brcm-select__error-message">{errorMessage}</span>}
      </Context.Provider>
    </div>
  );
});

Select.displayName = 'Select';

export default Object.assign(Select, { Option });
