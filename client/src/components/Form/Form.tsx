import React, { useState } from 'react';
import { useFormik } from 'formik';
import { FormWrapper, Select } from './Form.styled';
import Input from '../Input/Input';
import productValidation from '../../consts/product.validation';

type Props = {};

const Form = (props: Props) => {
  const [type, setType] = useState('');

  const formik = useFormik({
    initialValues: {
      sku: new Date().getTime().toString(),
      name: '',
      price: '',
      type: type,
      size: '',
      weight: '',
      length: '',
      height: '',
      width: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
    // validateOnBlur: true,
    // validateOnChange: true,
    validationSchema: productValidation,
  });

  return (
    <FormWrapper onSubmit={formik.handleSubmit} id="product_form">
      <Input
        label="Sku"
        parent="sku"
        handleChange={formik.handleChange}
        value={formik.values.sku}
        errors={formik.errors}
      />

      <Input
        label="Name"
        parent="name"
        handleChange={formik.handleChange}
        value={formik.values.name}
        errors={formik.errors}
      />

      <Input
        label="Price ($)"
        parent="price"
        handleChange={formik.handleChange}
        value={formik.values.price}
        errors={formik.errors}
      />

      <Select
        name="type"
        value={formik.values.type}
        onChange={(e) => {
          setType(e.target.value);
          formik.handleChange(e);
        }}
        onBlur={formik.handleBlur}
      >
        <option value="" label="Select type">
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

      {type === 'DVD' && (
        <Input
          label="Size (MB)"
          parent="size"
          handleChange={formik.handleChange}
          value={formik.values.size}
          errors={formik.errors}
        />
      )}

      {type === 'BOOK' && (
        <Input
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
            label="Length (CM)"
            parent="length"
            handleChange={formik.handleChange}
            value={formik.values.length}
            errors={formik.errors}
          />
          <Input
            label="Height (CM)"
            parent="height"
            handleChange={formik.handleChange}
            value={formik.values.height}
            errors={formik.errors}
          />
          <Input
            label="Width (CM)"
            parent="width"
            handleChange={formik.handleChange}
            value={formik.values.width}
            errors={formik.errors}
          />
        </>
      )}
    </FormWrapper>
  );
};

export default Form;
