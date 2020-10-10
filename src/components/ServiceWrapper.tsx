import React from 'react';
import styled from 'styled-components';
import MobileSizedView from 'react-mobile-sized-view';

const ServiceWrapper: React.FC = ({ children }) => {
  return (
    <MobileSizedView
      backgroundColor="#F26739"
      screenBackgroundColor="#F7F7F7"
      screenLightShadow="-31px -31px 62px #F06648"
      screenDarkShadow="31px 31px 62px #FD5644"
    >
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </MobileSizedView>
  );
};

export default ServiceWrapper;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;
