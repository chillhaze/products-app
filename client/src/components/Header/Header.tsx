import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import { Options, Title, Wrapper } from './Header.styled';

type Props = { title: string; productsDeleteButtonDisabled?: boolean };

const Header = ({ title, productsDeleteButtonDisabled }: Props) => {
  const navigate = useNavigate();

  return (
    <>
      {title === 'Product List' && (
        <Wrapper>
          <Title>{title}</Title>

          <Options>
            <Button
              type="button"
              parent="Header-List-linkTo"
              onClick={() => navigate('/product-add')}
            >
              ADD
            </Button>

            <Button
              type="submit"
              form="#product_delete"
              parent="Header-List-massDeleteBtn"
              isDisabled={productsDeleteButtonDisabled}
            >
              MASS DELETE
            </Button>
          </Options>
        </Wrapper>
      )}

      {title === 'Product Add' && (
        <Wrapper>
          <Title>{title}</Title>

          <Options>
            <Button type="submit" parent="Header-Add-save" form="product_form">
              Save
            </Button>

            <Button
              type="button"
              parent="Header-Add-cancel"
              onClick={() => navigate('/')}
            >
              Cancel
            </Button>
          </Options>
        </Wrapper>
      )}

      {title === 'Page not found :(' && (
        <Wrapper>
          <Title>{title}</Title>

          <Options>
            <Button
              type="button"
              parent="Header-List-linkTo"
              onClick={() => navigate('/')}
            >
              Home
            </Button>
          </Options>
        </Wrapper>
      )}
    </>
  );
};

export default Header;
