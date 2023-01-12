import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const CountriesList = ({ countries }) => {
  return (
    <div>
      {countries.map((country) => {
        return (
          <>
            <Link to={`${country.alpha3Code}`}>
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt="flag"
              />
              <h4>{country.name.official}</h4>
            </Link>
          </>
        );
      })}
    </div>
  );
};
