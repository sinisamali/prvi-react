import React from 'react';
import DrugaKomponenta from './DrugaKomponenta';
import Okvir from './Okvir';
import PocetnaStrana from './PocetnaStrana';
import PrvaKomponenta from './PrvaKomponenta';

function App() {
  let x = 15;
  return (
    <div className="App">
      <PocetnaStrana />
      Zdravo
      <PrvaKomponenta />
      <PrvaKomponenta />
      <PrvaKomponenta />

      <DrugaKomponenta />
      <DrugaKomponenta poruka="Cao" />
      <DrugaKomponenta poruka="Cao" />
      <DrugaKomponenta nesto="Nesto" drugo={'Drugo'} broj={x} />
      -------------------------
      <DrugaKomponenta />
      <DrugaKomponenta />
      <DrugaKomponenta />

      <Okvir />
      <Okvir>Unutra</Okvir>
    </div>
  );
}

export default App;
