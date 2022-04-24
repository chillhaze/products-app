import Form from '../../components/Form/Form';
import Header from '../../components/Header/Header';
import { Wrapper } from './AddProductView.styled';
import { INewProduct } from '../../interfaces/newProduct.interface';
import { IFormValues } from '../../interfaces/formValues.interface';
import removeUnusedFields from '../../utils/removeUnusedFields';
import ProductsService from '../../service/products.service';
const productsService = new ProductsService();

const AddProductView = () => {
  const handleFormSubmit = async (product: IFormValues) => {
    const newProduct: INewProduct = removeUnusedFields(product);
    return await productsService.addProduct(newProduct);
  };

  return (
    <Wrapper>
      <Header title="Product Add" />

      <Form handleFormSubmit={handleFormSubmit} />
    </Wrapper>
  );
};

export default AddProductView;
