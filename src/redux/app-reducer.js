

  const adresarData = [
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



const initialState = {
  nesto: 'blabla',
  adresar: adresarData
}

// Use the initialState as a default value
export default function appReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do something here based on the different types of actions
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state
  }
}

