import React, { useState } from 'react';
import { useScreenSize } from 'react-mobile-sized-view/lib/hooks';
import styled from 'styled-components';

import ProductCard from './ProductCard';
import useProducts from '../../api/useProducts';

import logoImage from '../../assets/logo.png';

const Home: React.FC = () => {
  const { width: screenWidth } = useScreenSize();
  const [page, setPage] = useState<number>(1);
  const [pending, setPending] = useState<boolean>(false);

  const products = useProducts(page);

  const onClickMoreButton = () => {
    if (pending) return;
    setPending(true);
    setPage(page + 1);
    setPending(false);
  };

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
            {...product}
            screenWidth={screenWidth}
          />
        ))}
        <MoreButton
          onClick={onClickMoreButton}
        >
          더보기
        </MoreButton>
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
  position: sticky;
  top: 0;
  z-index: 999;
`;

const Logo = styled.img`
  height: 25px;
  width: 207.891px;

  @media screen and (max-width: 340px) {
    height: 22px;
    width: 182.938px;
  }
`;

const Title = styled.span`
  font-size: 12px;
  font-weight: bold;
  margin-top: 3.5px;
  color: #F26739;

  @media screen and (max-width: 340px) {
    font-size: 10px;
  }
`;

const ProductList = styled.ul`
  width: 90%;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 12.5px 0;
`;

const MoreButton = styled.button`
  width: 100%;
  margin: 15px 0;
  padding: 15px 0;
  padding-bottom: 17px;
  font-weight: bold;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.45);
  background-color: #f9f9f9;
  transition: all 0.2s ease-in;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    color: rgba(0, 0, 0, 0.5);
    background-color: #fbfbfb;
    box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.05);
  }
`;
