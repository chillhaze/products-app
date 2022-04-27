import { IProduct } from '../../interfaces/product.interface';

import Options from './Options';
import {
  DeleteCheckBox,
  DeleteForm,
  DeleteLabel,
  DeleteText,
  ListItem,
  Name,
  Price,
  Sku,
  Type,
  Wrapper,
} from './Product.styled';

type Props = IProduct & {
  handleCheckboxChecked: (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;
  handleMassDelete: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Product = ({
  _id: id,
  sku,
  name,
  price,
  type,
  options,
  handleCheckboxChecked,
  handleMassDelete,
}: Props) => {
  const handleClass = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);

    if (e.target.checked) {
      return 'delete-checkbox';
    }
  };
  return (
    <ListItem>
      <Type>{type}</Type>

      <DeleteForm id="product_delete" onSubmit={(e) => handleMassDelete(e)}>
        <DeleteText>Delete</DeleteText>
        <DeleteLabel htmlFor="checkbox-delete">
          <DeleteCheckBox
            id="checkbox-delete"
            // className="delete-checkbox"
            className={`${handleClass}`}
            type="checkbox"
            onChange={(e) => handleCheckboxChecked(e, id)}
          />
        </DeleteLabel>
      </DeleteForm>

      <Wrapper>
        <Sku>{sku}</Sku>
        <Name>{name}</Name>
        <Price>{Number(price).toFixed(2)}$</Price>
        {type ? (
          <Options type={type} options={options} />
        ) : (
          <p>type is required</p>
        )}
      </Wrapper>
    </ListItem>
  );
};

export default Product;
