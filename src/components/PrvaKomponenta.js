import React, { useState } from 'react';


const PrvaKomponenta = (props) => {
  const [state, setState] = useState();
  const [brojac, setBrojac] = useState(0);

  const handleClick = (e) => {
    console.log('click');
    console.log(e);

    setBrojac(brojac + 1);

  };

  return (

    <div onClick={handleClick}>Ovo je moja prva komponenta. Kliknuto je {brojac} ,puta.</div>

  );
}

export default PrvaKomponenta;
