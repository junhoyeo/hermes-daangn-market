import React from 'react';
import styled from 'styled-components';

import ProductCard from './ProductCard';
import products from '../../mockups/products.json';

const Home: React.FC = () => {
  console.log(products);

  return (
    <Container>
      {products.map((product, productIndex) => (
        <ProductCard
          key={productIndex}
          {...product}
        />
      ))}
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
