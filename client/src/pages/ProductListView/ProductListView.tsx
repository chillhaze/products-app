import { useEffect, useState } from 'react';
import { isArray } from 'util';
import Header from '../../components/Header/Header';
import Product from '../../components/Product/Product';
// import { data } from '../../consts/data';
import { IProduct } from '../../interfaces/product.interface';
import ProductsService from '../../service/products.service';
import { List, ListItem, Type } from './ProductListView.styled';
const productsService = new ProductsService();

const ProductListView = () => {
  const [products, setProducts] = useState<IProduct[] | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      const res = await productsService.getProducts();
      if (res) setProducts(res);
    };

    getProducts();
  }, []);

  return (
    <>
      <Header title="Product List" />
      {products && (
        <List>
          {products.map((product) => {
            return (
              <ListItem key={product._id}>
                <Type>{product.type}</Type>
                <Product {...product} />
              </ListItem>
            );
          })}
        </List>
      )}
    </>
  );
};

export default ProductListView;
