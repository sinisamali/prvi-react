
export const paginationNextPage = (niz, strana, poStrani) => {
  let ukupnoStavki = niz.length;
  if (((strana * poStrani) + 1) > ukupnoStavki) {
    // ukoliko nema ni jedna stavka za sledecu stranicu onda i ne dozvoljavmo odlazak na sledecu
    // strana ostaje isti broj
  } else {
    // ukoliko ima bar jedna stavka za sledecu stranicu onda mozemo
    strana = strana + 1; // idemo na sledecu
  }
  return strana;
}

export const paginationPrevPage = (niz, strana, poStrani) => {
  let ukupnoStavki = niz.length;
  if (strana < 2) {
    // ttrani onda nema prethodne
    // strana ostaje isti broj
  } else {
    // ukoliko jos uvek nismo na prvoj strani onda mozemo jednu stranu manje 
    strana = strana - 1; // idemo na prethodnu
  }
  return strana;
}

export const makeArrayForSinglePage = (niz, strana, poStrani) => {
  let singlePageArr = [];
  niz.forEach((item, index) => {
    let redniBroj = index + 1;
    if (redniBroj <= (strana * poStrani)) {
      // ako redni broj nije veci od onog sto moze na tu stranu
      if (((strana - 1) * poStrani) < redniBroj) {
        // ako je redni broj veci od onog sa prethodne strane
        singlePageArr.push(item);
      }
    }
  });
  return singlePageArr;
} 

export const izracunajUkupnoStrana = (niz, poStrani) => {
  let ukupnoStrana = Math.ceil(niz.length / poStrani);
  return ukupnoStrana;
}