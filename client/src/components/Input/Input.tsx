import React, { useEffect, useState } from 'react';
import { Box, Error, InputItem, InputLabel, Wrapper } from './Input.styled';

type TError = { [key: string]: string };

type Props = {
  label: string;
  parent: string;
  handleChange: (e: React.ChangeEvent<any>) => void;
  value: string;
  errors: TError;
};

const Input = ({ label, parent, handleChange, value, errors }: Props) => {
  const [error, setError] = useState('');

  useEffect(() => {
    if (errors) setError(errors[parent]);
  }, [errors, parent]);

  return (
    <Wrapper>
      <InputLabel htmlFor={parent}>{label}</InputLabel>

      <Box>
        {error && <Error>{error}</Error>}
        <InputItem
          id={parent}
          name={parent}
          type={'text'}
          onChange={handleChange}
          value={value}
        />
      </Box>
    </Wrapper>
  );
};

export default Input;
