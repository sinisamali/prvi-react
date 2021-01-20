import { izracunajUkupnoStrana, paginationNextPage, paginationPrevPage } from "../utils/pagination-utils";


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
  },
  {
    id: 6,
    name: 'Lazar',
    prezime: 'Markovic',
    godine: 40
  },
  {
    id: 7,
    name: 'Fiona',
    prezime: 'Markovic',
    godine: 50
  }
];



const initialState = {
  nesto: 'blabla',
  adresar: adresarData,
  strana: 1,
  poStrani: 5,
  ukupnoStrana: izracunajUkupnoStrana(adresarData, 5)
}

// Use the initialState as a default value
export default function appReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do something here based on the different types of actions

    case 'NEXT_PAGE':
      return {
        ...state,
        strana: paginationNextPage(state.adresar, state.strana, state.poStrani)
      };

    case 'PREV_PAGE':
      return {
        ...state,
        strana: paginationPrevPage(state.adresar, state.strana, state.poStrani)
      };

    case 'PER_PAGE_CHANGED':
      return {
        ...state,
        poStrani: action.payload,
        strana: 1,
        ukupnoStrana: izracunajUkupnoStrana(state.adresar, action.payload)
      };

    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state
  }
}


