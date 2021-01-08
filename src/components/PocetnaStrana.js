import React, { useState } from 'react';
import Btn from './Btn';
import Tabela from './Tabela';

const PocetnaStrana = (props) => {
  const [poStrani, setPoStrani] = useState("5");

  const handleChange = e => {
    // ova funkcija se poziva svaki put kada korisnik promeni nesto u odredjenom polju forme (onChange event)

    let value = e.target.value; // value koji je korisnik izabrao
    console.log(typeof value);
    setPoStrani(value);

  };



  return (
    <div className="pocetna-strana" >
      <div className="toolBar">
        <Btn title="next" />
        <span>Strana: 1</span>
        <Btn title="previous" />

        <label>Po strani:
        <select
            value={poStrani}
            onChange={handleChange}
          >
            <option value="">--IZABERI OPCIJU--</option>
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </label>

      </div>
      <Tabela poStrani={poStrani} />
    </div>
  );
}

export default PocetnaStrana;
