import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddProductView from './pages/AddProductView/AddProductView';
import ProductListView from './pages/ProductListView/ProductListView';
import PageNotFoundView from './pages/PageNotFoundView/PageNotFoundView';
import Footer from './components/Footer/Footer';
import { Container } from './App.styled';

const App: React.FC = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<ProductListView />} />
        <Route path="/product-add" element={<AddProductView />} />
        <Route path="*" element={<PageNotFoundView />} />
      </Routes>
      <Footer />
    </Container>
  );
};

export default App;
