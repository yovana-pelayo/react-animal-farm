import React from 'react';
import background from './background.png';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="app" style={{ backgroundImage: `url(${background})` }}>
      <div className="App">
        <Header />
        <Main />xs
        <Footer />
      </div>
    </div>
  );
}

export default App;
