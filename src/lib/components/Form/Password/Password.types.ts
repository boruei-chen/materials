export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'outline' | 'underline' | 'pill' | 'filled';
  label?: string;
  className?: string;
  toggleMask?: boolean;
  errorMessage?: string;
}

export enum MaskEnum {
  Public = 'public',
  Protected = 'protected'
}
