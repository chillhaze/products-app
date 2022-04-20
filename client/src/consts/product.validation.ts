import { object, string, number } from 'yup';

const productValidation = object().shape({
  sku: string().min(10).max(15).required('SKU is required'),
  name: string().min(2).max(40).required('Name  is required'),
  price: number()
    .required('Price is required')
    .typeError('Price must be a `number` type'),
  type: string()
    .required('Type is required')
    .oneOf(['DVD', 'BOOK', 'FURNITURE']),
  size: number()
    .required('Size is required')
    .typeError('Size must be a `number` type'),
  weight: number()
    .required('Weight is required')
    .typeError('Weight must be a `number` type'),
  length: number()
    .required('Length is required')
    .typeError('Length must be a `number` type'),
  height: number()
    .required('Height is required')
    .typeError('Height must be a `number` type'),
  width: number()
    .required('Width is required')
    .typeError('Width must be a `number` type'),
});

export default productValidation;
