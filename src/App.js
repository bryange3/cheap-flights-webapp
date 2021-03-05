import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import FlightsInfo from './components/FlightsInfo';

function App() {
  return (
    <div className="App">
      <Header title="Airport Info"></Header>
      <FlightsInfo></FlightsInfo>
      <Footer title="2020"></Footer>
    </div>
  );
}

export default App;