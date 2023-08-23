import { Props as CheckboxProps } from '../Checkbox.types';

export interface Props extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  label?: string;
  name?: string;
  values?: CheckboxProps['value'][];
  errorMessage?: string;
  disabled?: boolean;
  onChange?: (values: CheckboxProps['value'][]) => void;
}

export interface ContextValues {
  name?: string;
  values: CheckboxProps['value'][];
  disabled?: boolean;
  onTargetCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
