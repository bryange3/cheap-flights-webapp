import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import FlightsInfo from './components/FlightsInfo';

function App() {
  return (
    <div className="App">
      <Header title="CheapFlights"></Header>
      <FlightsInfo></FlightsInfo>
      <Footer title="Find your cheapest flight!"></Footer>
    </div>
  );
}

export default App;