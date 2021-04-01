import React from 'react';
import Cards from './components/Cards';

import { Wave } from './components/wave';
import { MiddleContainer } from './components/body'
import { Header} from './components/header';

function App() {
  return (
    <>
    <Header />
    <MiddleContainer 
    title="Sell online with Shopify"
    subtitle="Thusted by over 800,000 businesses worldwide"
    />
    <Wave />
    <Cards/>
    </>
  );
}

export default App;
