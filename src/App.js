import React, { useState, Fragment } from 'react';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Section from './components/Section/Section';
import Article from './components/Article/Article';
import Data from './components/Data/Data';
import Footer from './components/Footer/Footer';


function App() {

  const [displayData, setDisplayData] = useState(false);

  const clickHandler = () => {
    setDisplayData(true);
  };

  return (
    <Fragment>
      <Header />
      <Main />
      <Section />
      <Article onClick={clickHandler} >
        {displayData && <Data />}
      </Article>
      <Footer />
    </Fragment>
  );
}

export default App;
