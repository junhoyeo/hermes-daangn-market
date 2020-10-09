import React from 'react';

import Router from './Router';
import ServiceWrapper from './components/ServiceWrapper';

const App: React.FC = () => {
  return (
    <ServiceWrapper>
      <Router />
    </ServiceWrapper>
  );
};

export default App;
