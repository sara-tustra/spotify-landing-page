import React from 'react';
import Cards from './components/cards';
import Footer from './components/footer';
import Button from './components/button';
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
    <Footer
    paragraph1="Shopify is better than any other platform we've played with, and we've player with them all"
    subparagraph="JONATHON BAYME, CEO OF THEORY11"
    />
    <Button
    textBoton="Start free trial"
    link1="Terms of Service"
    link2="Privacy Policy"/>
    </>
  );
}

export default App;
