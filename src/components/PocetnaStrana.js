import React, { useState } from 'react';
import { connect } from 'react-redux';
import Btn from './Btn';
import Tabela from './Tabela';

const PocetnaStrana = (props) => {
  // const [poStrani, setPoStrani] = useState("5");
  // const [strana, setStrana] = useState(1);
  let strana = props.strana;
  let poStrani = props.poStrane

  const handleChange = e => {
    // ova funkcija se poziva svaki put kada korisnik promeni nesto u odredjenom polju forme (onChange event)

    let value = e.target.value; // value koji je korisnik izabrao
    console.log(typeof value);
    // setPoStrani(value);

  };

  const nextPage = () => {
    console.log('kliknuli smo')
    /*
    dispatchovqanjem govorimo reduxu sta zelimo da izmeni u stateu
    kao argument dispatch funkcije se stavlja action
    Action je u formatu FLUX STANDARD ACTION https://github.com/redux-utilities/flux-standard-action

    */
    props.dispatch({
      type: 'NEXT_PAGE'
    })

  }
  const prevPage = () => {
    props.dispatch({
      type: 'PREV_PAGE'
    })
  }



  return (
    <div className="pocetna-strana" >
      <div className="toolBar">
        <Btn
          title="next"
          handleClick={nextPage}
        />
        <span>Strana: {strana}</span>
        <Btn
          title="previous"
          handleClick={prevPage}
        />

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
      <Tabela poStrani={poStrani} strana={strana} />
    </div>
  );
}
// export default PocetnaStrana;

// POVEZIVANJE SA REDUX STATEOM APLIKACIJE I REDUX DISPATCHEROM
const mapStateToProps = state => ({
  readme: 'Sve propertije iz ovog objekta komponenta iznad prima kao props + i props.dispatch',
  strana: state.strana,
  poStrane: state.poStrani
});

export default connect(mapStateToProps)(PocetnaStrana); // ovom se formira specijalan komponenta iznad nase, koja sluzi da nasoj komponenti posalje props koje smo definisali u mapStateToProps
