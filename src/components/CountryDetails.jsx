import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const CountryDetails = ({ countries }) => {
  const { id } = useParams(); // you have the alpha code of the country

  const [theCountry, setTheCountry] = useState('');
  console.log(theCountry.alpha3Code);

  useEffect(() => {
    const oneCountry = countries.filter((country) => {
      return country.alpha3Code === id;
    });
    setTheCountry(oneCountry[0]);
  }, [id]);

  return (
    <div>
      <h4>{theCountry.capital}</h4>
      <h4>{theCountry.region}</h4>
      <h4>{theCountry.borders}</h4>
    </div>
  );
};
