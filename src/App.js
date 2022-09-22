import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';

function App() {
  const [countriesData, setCountriesData] = useState([]);
  // console.log(countriesData)
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountriesData(data))
  }, [])
  return (
    <div className="App bg-dark">
      <h1 className="display-1 fw-bold text-white"> World Countries</h1>
      <small>There are {countriesData.length} countries informations available</small>
      <Countries country={countriesData}></Countries>
    </div>
  );
}

export default App;
