export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'outline' | 'underline' | 'pill' | 'filled';
  label?: string;
  className?: string;
  errorMessage?: string;
}
