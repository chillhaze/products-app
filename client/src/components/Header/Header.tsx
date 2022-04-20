import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import { Options, Title, Wrapper } from './Header.styled';

type Props = { title: string };

const Header = ({ title }: Props) => {
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
              Add
            </Button>

            <Button
              type="button"
              parent="Header-List-massDeleteBtn"
              onClick={() => console.log('Header-massDeleteBtn')}
            >
              Mass Delete
            </Button>
          </Options>
        </Wrapper>
      )}

      {title === 'Product Add' && (
        <Wrapper>
          <Title>{title}</Title>

          <Options>
            <Button
              // type="button"
              // onClick={() => console.log('Header-Add-save')}
              parent="Header-Add-save"
              form="product_form"
              type="submit"
            >
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
    </>
  );
};

export default Header;
