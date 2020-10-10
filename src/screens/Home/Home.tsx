import React from 'react';
import styled from 'styled-components';

import ProductCard from './ProductCard';
import products from '../../api/products.json';
import useScreenSize from '../../utils/useScreenSize';

import logoImage from '../../assets/logo.png';

const Home: React.FC = () => {
  const { width: screenWidth } = useScreenSize();

  return (
    <Container>
      <Header>
        <Logo src={logoImage} />
        <Title>당근마켓에서 판매 중인 애플워치 에르메스를 만나보세요!</Title>
      </Header>
      <ProductList>
        {products.map((product, productIndex) => (
          <ProductCard
            key={productIndex}
            screenWidth={screenWidth}
            {...product}
          />
        ))}
      </ProductList>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  background-color: white;
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.045);
`;

const Logo = styled.img`
  height: 25px;
`;

const Title = styled.span`
  font-size: 12px;
  font-weight: bold;
  margin-top: 3.5px;
  color: #F26739;
`;

const ProductList = styled.ul`
  width: 90%;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 12.5px;
`;
