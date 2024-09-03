// src/App.js
import React from 'react';
import styled from 'styled-components';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ServiceCards from './components/ServiceCards/ServiceCards';
import PopularItems from './components/PopularItems/PopularItems';


const AppContainer = styled.div`
  font-family: 'Arial', sans-serif;
  padding: 10px;
`;

function App() {
  return (
    <AppContainer>
      <Header/>
      <Hero />
      <ServiceCards/>
      <PopularItems/>
    </AppContainer>
  );
}

export default App;