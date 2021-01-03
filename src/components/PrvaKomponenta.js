import React, { useState } from 'react';
import Btn from './Btn';


const PrvaKomponenta = (props) => {
  const [state, setState] = useState();
  const [brojac, setBrojac] = useState(0);

  const handleClick = (e) => {
    console.log('click');
    console.log(e);

    setBrojac(brojac + 1);

  };

  return (

    <div>Ovo je moja prva komponenta. Kliknuto je {brojac} ,puta. <Btn
      title="Klikni me"
      handleClick={handleClick}
    /></div>

  );
}

export default PrvaKomponenta;
