import Form from '../../components/Form/Form';
import Header from '../../components/Header/Header';
import { Wrapper } from './AddProductView.styled';

const AddProductView = () => {
  return (
    <Wrapper>
      <Header title="Product Add" />

      <Form />
    </Wrapper>
  );
};

export default AddProductView;
