import { Props as RadioProps } from '../Radio.types';

export interface Props extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  label?: string;
  name?: string;
  value?: RadioProps['value'];
  errorMessage?: string;
  disabled?: boolean;
  onChange?: (value: RadioProps['value']) => void;
}

export interface ContextValues {
  name?: string;
  value?: RadioProps['value'];
  disabled?: boolean;
  onTargetRadioChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
