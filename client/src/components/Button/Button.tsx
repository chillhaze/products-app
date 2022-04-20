import { Btn } from './Button.styled';

type Props = {
  type: 'button' | 'submit' | 'reset' | undefined;
  children: string | JSX.Element;
  parent: string;
  onClick?: () => void;
  form?: string;
};

const Button = ({ type, children, parent, onClick, form }: Props) => {
  return (
    <Btn onClick={onClick} {...parent} form={form} type={type}>
      {children}
    </Btn>
  );
};

export default Button;
