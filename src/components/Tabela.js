import React, { useState } from 'react';
import { connect } from 'react-redux';
import { sortirajPoGodinama, sortirajPoKljucu } from '../utils/sort-utils';

const Tabela = (props) => {
  const [key, setKey] = useState(null)

  let poStrani = 0;
  if (props.poStrani > 0) {
    poStrani = props.poStrani; // stitmo komponentu ako joj slucajno ne stigne props.poStrani ili ako stigne nesto sto nije broj
  }

  let data = props.tableData;

  let counter = 0;
  let dataZaPrikaz = data.filter((item) => {
    counter++;
    if (counter <= poStrani) {
      return true;
    }
    return false;
  });

  // let sortedData = sortirajPoGodinama(dataZaPrikaz);
  let sortedData = sortirajPoKljucu(dataZaPrikaz, key);

  let jsxTableRows = sortedData.map(el => {
    return (
      <tr key={el.id}>
        <td>{el.id}</td>
        <td>{el.name}</td>
        <td>{el.prezime}</td>
        <td>{el.godine}</td>
      </tr>
    )
  });


  const _click = (sta) => {
    // prima na sta smo kliknuli i izvodi sortirnje po tom parametru
    setKey(sta);
  }

  return (
    <table className="table table-dark table-striped">
      <thead>
        <tr>
          <th onClick={() => { _click('id') }}>#</th>
          <th onClick={() => { _click('name') }}>Ime</th>
          <th >Prezime</th>
          <th onClick={() => { _click('godine') }}>Godine</th>
        </tr>
      </thead>
      <tbody>
        {jsxTableRows}
      </tbody>
    </table>
  );
}

// export default Tabela;

// POVEZIVANJE SA REDUX STATEOM APLIKACIJE I REDUX DISPATCHEROM
// KORAK 1:
const mapStateToProps = state => ({
  readme: 'Sve propertije iz ovog objekta komponenta iznad prima kao props + i props.dispatch',
  tableData: state.adresar,
  blabla: 'bla bla bla'
});
// to znaci da ce iz globalnog REDUX statea aplikacije da bude uzeto samo .adresar i stici ce ovoj komponenti kao props.tableData
// takodje props.blabla smo sada izmislili, nije iz redix statea
// dodatno cemo da ovom tehnikom primimo i props.dispatch
// props.dispatch() sluzi za povratnu komunikaciju sa reducom.
// KORAK 2:
export default connect(mapStateToProps)(Tabela); // ovom se formira specijalan komponenta iznad nase, koja sluzi da nasoj komponenti posalje props koje smo definisali u mapStateToProps