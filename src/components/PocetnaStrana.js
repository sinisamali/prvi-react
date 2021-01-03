import React from 'react';
import Btn from './Btn';
import Tabela from './Tabela';

const PocetnaStrana = (props) => {
  return (
    <div className="pocetna-strana" >
      <div className="toolBar">
        <Btn title="next" />
        <span>Strana: 1</span>
        <Btn title="previous" />

        <label>Po strani:</label>
        <select value="5">
        <option value="">--IZABERI OPCIJU--</option>
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>

      </div>
      <Tabela />
    </div>
  );
}

export default PocetnaStrana;
