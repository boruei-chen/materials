export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  direction?: 'row' | 'row-reverse';
}
