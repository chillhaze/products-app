import React from 'react';
import { Link, useLocation } from 'react-router-dom';

type Props = {};

const Navigation = (props: Props) => {
  let location = useLocation();

  let path = '';
  let pathName = '';

  if (location.pathname === '/') {
    path = '/add-product';
    pathName = 'Add product';
  } else if (location.pathname === '/add-product') {
    path = '/';
    pathName = 'Home';
  }

  return (
    <nav>
      <Link to={path}>{pathName}</Link>
    </nav>
  );
};

export default Navigation;
