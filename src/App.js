import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { CountriesList } from './components/CountriesList';
import { CountryDetails } from './components/CountryDetails';

import NavBar from './components/NavBar';
import Test from './components/Test';
import countries from './countries.json';

function App() {
  const [theCountries, setTheCountries] = useState(countries);
  return (
    <div className="App">
      <NavBar />
      <div>
        <CountriesList countries={theCountries} />
      </div>
      <div>
        <Routes>
          <Route
            path="/:id"
            element={<CountryDetails countries={theCountries} />}
          />
          <Route path="/test" element={<Test />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
