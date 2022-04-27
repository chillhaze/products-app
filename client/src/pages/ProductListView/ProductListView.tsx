import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Product from '../../components/Product/Product';
import { IProduct } from '../../interfaces/product.interface';
import { List } from './ProductListView.styled';
import ProductsService from '../../service/products.service';
const productsService = new ProductsService();

type TProductsToDelete = string[] | undefined;

const ProductListView = () => {
  const [products, setProducts] = useState<IProduct[] | null>(null);
  const [productsToDelete, setProductsToDelete] = useState<TProductsToDelete>(
    []
  );

  const getProducts = async () => {
    const res = await productsService.getProducts();
    if (res) setProducts(res);
  };

  useEffect(() => {
    if (!products) {
      getProducts();
    }
  }, [products]);

  const handleCheckboxChecked = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const isChecked = e.target.checked;

    if (isChecked) {
      setProductsToDelete((state) => {
        if (!state) {
          return [id];
        } else {
          return [...state, id];
        }
      });
    } else if (!isChecked) {
      setProductsToDelete((state) => {
        if (state) {
          const updatedState = state.filter((el) => el !== id);

          return updatedState;
        }
      });
    }
  };

  const handleMassDelete = (e: React.FormEvent<HTMLFormElement>) => {
    productsService?.deleteProduct(productsToDelete);
  };

  return (
    <>
      <Header
        title="Product List"
        productsDeleteButtonDisabled={
          productsToDelete && productsToDelete.length >= 1 ? false : true
        }
      />
      {products && (
        <List>
          {products.map((product) => {
            return (
              <Product
                {...product}
                handleCheckboxChecked={handleCheckboxChecked}
                handleMassDelete={handleMassDelete}
                key={product._id}
              />
            );
          })}
        </List>
      )}
    </>
  );
};

export default ProductListView;
