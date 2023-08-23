export interface Props extends React.LiHTMLAttributes<HTMLLIElement> {
  value: string;
}

export interface OptionData {
  value: Props['value'];
  option: Props['children'];
}
