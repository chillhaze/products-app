import { Btn } from './Button.styled';

type Props = {
  type: 'button' | 'submit' | 'reset' | undefined;
  children: string | JSX.Element;
  parent: string;
  onClick?: () => void;
  form?: string;
  isDisabled?: boolean;
};

const Button = ({
  type,
  children,
  parent,
  onClick,
  form,
  isDisabled,
}: Props) => {
  return (
    <Btn
      onClick={onClick}
      {...parent}
      form={form}
      type={type}
      disabled={isDisabled}
    >
      {children}
    </Btn>
  );
};

export default Button;
