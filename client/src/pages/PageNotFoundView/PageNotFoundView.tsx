import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFoundView: React.FC = () => {
  return (
    <section>
      <p>Page not found...</p>
      <Link to="/">Go to the home page</Link>
    </section>
  );
};

export default PageNotFoundView;
