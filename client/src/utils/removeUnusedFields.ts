import { IFormValues } from '../interfaces/formValues.interface';

const removeUnusedFields = (product: IFormValues) => {
  const newProduct = Object.entries(product).reduce(
    (acc, prev) => {
      if (prev[1] === '') return (acc = { ...acc });
      else if (
        prev[0] === 'name' ||
        prev[0] === 'sku' ||
        prev[0] === 'price' ||
        prev[0] === 'type'
      )
        return (acc = { ...acc, [prev[0]]: prev[1] });
      else
        return (acc = {
          ...acc,
          options: { ...acc.options, [prev[0]]: prev[1] },
        });
    },
    {
      sku: undefined,
      name: undefined,
      price: undefined,
      type: undefined,
      options: {},
    }
  );

  return newProduct;
};

export default removeUnusedFields;
