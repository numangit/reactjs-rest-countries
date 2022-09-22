import React from 'react';
import Country from '../Country/Country';

const Countries = (props) => {
    const countries = props.country;
    // console.log(countries)
    return (
        <div className="container text-center">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    countries.map(country => <Country country={country} key={country.cca3}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;