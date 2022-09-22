import React from 'react';

const Country = (props) => {
    console.log(props.country);
    const { area, region, name, flags } = props.country;
    return (
        <div className="col">
            <div className="card">
                <img src={flags.png} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name.official}</h5>
                    <p>Area : {area}</p>
                    <p>Region : {region}</p>
                </div>
            </div>
        </div>
    );
};

export default Country;