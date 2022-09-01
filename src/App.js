import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Employees from './Employees';
import './App.css';

function App() {
  return (
    <div className="App">
     <Header />
     <Employees />
     <Footer />
     <Content />
    
    </div>
  );
}

export default App;
