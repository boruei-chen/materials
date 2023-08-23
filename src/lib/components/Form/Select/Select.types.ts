import { OptionData } from './Option/Option.types';

export interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  variant?: 'outline' | 'underline' | 'pill' | 'filled';
  label?: string;
  className?: string;
  errorMessage?: string;
  onChange?: (event: ChangeEvent) => void;
}

export interface ContextValues {
  activeOptionData?: OptionData;
  onVirtualOptionSelect: (event: ChangeEvent) => void;
}

export interface ChangeEvent extends OptionData {}
