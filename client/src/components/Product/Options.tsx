import { Option, OptionsWrapper } from './Product.styled';

type Props = {
  type: string;
  options: {
    size?: number;
    weight?: number;
    height?: number;
    width?: number;
    length?: number;
  };
};

const Options = ({ type, options }: Props) => {
  return (
    <OptionsWrapper>
      {type === 'DVD' && <Option>Size: {options.size} MB</Option>}
      {type === 'Furniture' && (
        <Option>{`Dimension: ${options.length}x${options.height}x${options.width}`}</Option>
      )}
      {type === 'Book' && <Option>Weight: {options.weight}KG</Option>}
    </OptionsWrapper>
  );
};

export default Options;
