/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Contact from './components/Contact'
import Portfolio from './components/Portfolio';
import Header from "./components/Header";


function App() {

  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    switch (currentPage) {
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      default:
        return <About />;
    }
  };
  return (
    <div>
      <Header>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      </Header>
      <main>
        <div>{renderPage(currentPage)}</div>
      </main>
      <Footer>

      </Footer>
    </div>
  );
}


export default App;
