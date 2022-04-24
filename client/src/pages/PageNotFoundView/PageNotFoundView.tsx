import React from 'react';
import Header from '../../components/Header/Header';
import { Wrapper } from './PageNotFound.styled';

const PageNotFoundView: React.FC = () => {
  return (
    <Wrapper>
      <Header title="Page not found :(" />
    </Wrapper>
  );
};

export default PageNotFoundView;
