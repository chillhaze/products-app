import { useState } from 'react';
import { Formik } from 'formik';
import {
  Error,
  FormWrapper,
  Select,
  SelectLabel,
  SelectWrapper,
} from './Form.styled';
import Input from '../Input/Input';
import productValidation from '../../consts/product.validation';
import { IFormValues } from '../../interfaces/formValues.interface';
import { useNavigate } from 'react-router-dom';

type Props = {
  handleFormSubmit: (product: IFormValues) => void;
};

const Form = ({ handleFormSubmit }: Props) => {
  const [type, setType] = useState('none');
  const navigate = useNavigate();

  const initialFormValues: IFormValues = {
    sku: new Date().getTime().toString(),
    name: '',
    price: '',
    type: type,
    size: '',
    weight: '',
    length: '',
    height: '',
    width: '',
  };

  return (
    <Formik
      initialValues={{ ...initialFormValues }}
      validationSchema={() => productValidation(type)}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={async (values: IFormValues, actions) => {
        try {
          const response = await handleFormSubmit(values);
          if (response !== null) {
            actions.resetForm();
            navigate('/');
          }
        } catch (err) {
          console.log(err);
        }
      }}
    >
      {(formik) => (
        <FormWrapper onSubmit={formik.handleSubmit} id="product_form">
          <Input
            label="Sku"
            parent="sku"
            id="sku"
            handleChange={formik.handleChange}
            value={formik.values.sku}
            errors={formik.errors}
          />

          <Input
            id="name"
            label="Name"
            parent="name"
            handleChange={formik.handleChange}
            value={formik.values.name}
            errors={formik.errors}
          />

          <Input
            id="price"
            label="Price ($)"
            parent="price"
            handleChange={formik.handleChange}
            value={formik.values.price}
            errors={formik.errors}
          />

          <SelectWrapper>
            {formik.errors && formik.errors.type && (
              <Error>{formik.errors.type}</Error>
            )}

            <SelectLabel>Type Switcher</SelectLabel>
            <Select
              id="productType"
              name="type"
              value={formik.values.type}
              onChange={(e) => {
                setType(e.target.value);
                formik.handleChange(e);
              }}
              onBlur={formik.handleBlur}
            >
              <option value="none" label="Select type">
                Select type
              </option>
              <option value="DVD" label="DVD">
                DVD
              </option>
              <option value="BOOK" label="BOOK">
                BOOK
              </option>
              <option value="FURNITURE" label="FURNITURE">
                FURNITURE
              </option>
            </Select>
          </SelectWrapper>

          {type === 'DVD' && (
            <Input
              id="size"
              label="Size (MB)"
              parent="size"
              handleChange={formik.handleChange}
              value={formik.values.size}
              errors={formik.errors}
            />
          )}

          {type === 'BOOK' && (
            <Input
              id="weight"
              label="Weight (KG)"
              parent="weight"
              handleChange={formik.handleChange}
              value={formik.values.weight}
              errors={formik.errors}
            />
          )}

          {type === 'FURNITURE' && (
            <>
              <Input
                id="length"
                label="Length (CM)"
                parent="length"
                handleChange={formik.handleChange}
                value={formik.values.length}
                errors={formik.errors}
              />
              <Input
                id="height"
                label="Height (CM)"
                parent="height"
                handleChange={formik.handleChange}
                value={formik.values.height}
                errors={formik.errors}
              />
              <Input
                id="width"
                label="Width (CM)"
                parent="width"
                handleChange={formik.handleChange}
                value={formik.values.width}
                errors={formik.errors}
              />
            </>
          )}
        </FormWrapper>
      )}
    </Formik>
  );
};

export default Form;
