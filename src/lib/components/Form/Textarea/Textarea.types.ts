export interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: 'outline' | 'underline' | 'filled';
  label?: string;
  className?: string;
  displayCount?: boolean;
  errorMessage?: string;
}
