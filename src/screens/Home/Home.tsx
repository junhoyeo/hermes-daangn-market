import React from 'react';
import styled from 'styled-components';

import ProductCard from './ProductCard';
import products from '../../api/products.json';
import useScreenSize from '../../utils/useScreenSize';

const Home: React.FC = () => {
  const { width: screenWidth } = useScreenSize();

  return (
    <Container>
      {products.map((product, productIndex) => (
        <ProductCard
          key={productIndex}
          screenWidth={screenWidth}
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
