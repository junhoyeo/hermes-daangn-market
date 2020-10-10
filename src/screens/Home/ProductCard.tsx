import React from 'react';
import styled, { css } from 'styled-components';

import { IProduct } from '../../api/interfaces';

interface IProductCardWidth {
  width?: number;
}

export interface IProductCard extends IProduct {
  screenWidth: number;
}

const ProductCard: React.FC<IProductCard> = ({
  href, image, title, regionName, price, size, series, screenWidth,
}) => {
  const productCardWidth = screenWidth * 0.9 * 0.48;

  const onClickProductCard = () => {
    const win = window.open(`https://www.daangn.com/${href}`, '_blank');
    win?.focus();
  };

  return (
    <Container
      width={productCardWidth}
      onClick={onClickProductCard}
    >
      <ImageWrapper
        width={productCardWidth}
      >
        <Image src={`${image}?q=85&s=400x400&t=crop`} />
        <InformationContainer>
          {series && <Series>Series {series}</Series>}
          {size ? (
            <Size>
              {size}
              <small>mm</small>
            </Size>
          ) : <UnknownSize>Unknown</UnknownSize>}
        </InformationContainer>
      </ImageWrapper>
      <Title>{title}</Title>
      <MetaRow>
        <Meta>{regionName}</Meta>
        <Meta>{price}</Meta>
      </MetaRow>
    </Container>
  );
};

export default ProductCard;

const Container = styled.li<IProductCardWidth>`
  margin-top: 15px;
  margin-bottom: 10px;
  list-style-type: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.035);
  }

  ${({ width = 240 }) => css`
    width: ${width}px;
  `};
`;

const ImageWrapper = styled.div<IProductCardWidth>`
  position: relative;

  ${({ width = 240 }) => css`
    width: ${width}px;
    height: ${width}px;
  `};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.12);
`;

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 12px;
  left: 12px;
`;

const InformationText = styled.span`
  color: white;
  text-shadow: 3px 3px 9px rgba(0, 0, 0, 0.25);
  font-weight: 900;
  line-height: 1;
`;

const Series = styled(InformationText)`
  font-size: 20px;

  @media screen and (max-width: 400px) {
    font-size: 18px;
  }

  @media screen and (max-width: 340px) {
    font-size: 16px;
  }
`;

const Size = styled(InformationText)`
  font-size: 36px;

  @media screen and (max-width: 400px) {
    font-size: 30px;
    line-height: 1.1;
  }

  @media screen and (max-width: 340px) {
    font-size: 25px;
  }
`;

const UnknownSize = styled(Size)`
  font-size: 28px;
  letter-spacing: -1.5px;

  @media screen and (max-width: 400px) {
    font-size: 25px;
    line-height: 1.3;
  }

  @media screen and (max-width: 340px) {
    font-size: 20px;
    line-height: 1.25;
  }
`;

const Title = styled.h3`
  font-weight: bold;
  font-size: 15px;
  word-break: break-word;
  line-height: 1.25;
  margin: 0;
  margin-top: 8px;
`;

const MetaRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;

const Meta = styled.span`
  font-size: 12px;
  line-height: 1.45;

  &:not(:first-child) {
    color: #F26739;
    font-weight: bold;
  }
`;
