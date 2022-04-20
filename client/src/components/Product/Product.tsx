import { IProduct } from '../../interfaces/product.interface';

import Options from './Options';
import { Name, Price, Sku, Wrapper } from './Product.styled';

const Product = ({ _id: id, name, price, type, options }: IProduct) => {
  return (
    <Wrapper>
      <Sku>{id}</Sku>
      <Name>{name}</Name>
      <Price>{price}$</Price>
      {type ? (
        <Options type={type} options={options} />
      ) : (
        <p>type is required</p>
      )}
    </Wrapper>
  );
};

export default Product;
