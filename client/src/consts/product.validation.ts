import { object, string, number } from 'yup';
import { productTypes } from './productTypes';

const numberType = 'must be a `number` type';
const isRequired = 'is required';

const productValidation = (type: string | undefined) => {
  if (type === 'none')
    return object().shape({
      sku: string().min(10).max(15).required(`SKU ${isRequired}`),
      name: string().min(2).max(150).required('Please, submit required data'),
      price: number()
        .required(`Price ${isRequired}`)
        .typeError(`Price ${numberType}`),
      type: string().required(`Type ${isRequired}`).oneOf(productTypes),
    });
  if (type === 'DVD')
    return object().shape({
      sku: string().min(10).max(15).required(`SKU ${isRequired}`),
      name: string().min(2).max(150).required('Please, submit required data'),
      price: number()
        .required(`Price ${isRequired}`)
        .typeError(`Price ${numberType}`),
      type: string().required(`Type ${isRequired}`).oneOf(productTypes),
      size: number()
        .required(`Size ${isRequired}`)
        .typeError(`Size ${numberType}`),
    });
  if (type === 'Book')
    return object().shape({
      sku: string().min(10).max(15).required(`SKU ${isRequired}`),
      name: string().min(2).max(150).required('Please, submit required data'),
      price: number()
        .required(`Price ${isRequired}`)
        .typeError(`Price ${numberType}`),
      type: string().required(`Type ${isRequired}`).oneOf(productTypes),
      weight: number()
        .required(`Weight ${isRequired}`)
        .typeError(`Weight ${numberType}`),
    });
  if (type === 'Furniture')
    return object().shape({
      sku: string().min(10).max(15).required(`SKU ${isRequired}`),
      name: string().min(2).max(150).required(`Name  ${isRequired}`),
      price: number()
        .required(`Price ${isRequired}`)
        .typeError(`Price ${numberType}`),
      type: string().required(`Type ${isRequired}`).oneOf(productTypes),
      length: number()
        .required(`Length ${isRequired}`)
        .typeError(`Length ${numberType}`),
      height: number()
        .required(`Height ${isRequired}`)
        .typeError(`Height ${numberType}`),
      width: number()
        .required(`Width ${isRequired}`)
        .typeError(`Width ${numberType}`),
    });
};

export default productValidation;
