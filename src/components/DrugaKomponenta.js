import React, { useState } from 'react';


const DrugaKomponenta = (props) => {

  return (

    <div className="druga">Ja sam Druga komponenta. Primila sam poruku {props.poruka} <br />
    i broj {props.broj}</div>

  );
}

export default DrugaKomponenta;
