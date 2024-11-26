import React from 'react';
import Main from './sections/Main/Main';
import AboutUs from './sections/AboutUs/AboutUs';
import Prices from './sections/Prices/Prices';
import Services from './sections/Services/Services';

const MainContent = () => {
  return (
    <main>
      <Main/>
      <Services/>
      <Prices/>
      <AboutUs/>
    </main>
  );
};

export default MainContent;
