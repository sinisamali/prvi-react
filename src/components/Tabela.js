import React from 'react';

const Tabela = (props) => {

  let data = [
    {
      id: 1,
      name: 'Zoran',
      prezime: 'Markovic',
      godine: 25
    },
    {
      id: 2,
      name: 'Marko',
      prezime: 'Markovic',
      godine: 24
    },
    {
      id: 3,
      name: 'Jovan',
      prezime: 'Markovic',
      godine: 23
    },
    {
      id: 4,
      name: 'Srdjan',
      prezime: 'Markovic',
      godine: 22
    },
    {
      id: 5,
      name: 'Miodrag',
      prezime: 'Markovic',
      godine: 60
    }
  ];

  let jsxTableRows = data.map(el => {
    return (
      <tr key={el.id}>
        <td>{el.id}</td>
        <td>{el.name}</td>
        <td>{el.prezime}</td>
        <td>{el.godine}</td>
      </tr>
    )
  })

  return (
    <table className="table table-dark table-striped">
      <thead>
        <tr>
          <th >#</th>
          <th >Ime</th>
          <th >Prezime</th>
          <th >Godine</th>
        </tr>
      </thead>
      <tbody>
        {jsxTableRows}
      </tbody>
    </table>
  );
}

export default Tabela;
