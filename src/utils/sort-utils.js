


export const sortirajPoGodinama = (arr) => {
  let sortedArr = arr.sort(function (a, b) {
    var _a = a.godine; // ignore upper and lowercase
    var _b = b.godine; // ignore upper and lowercase
    if (_a < _b) {
      return -1;
    }
    if (_a > _b) {
      return 1;
    }
    // names must be equal
    return 0;
  });
  return sortedArr;
};

export const sortirajPoKljucu = (arr, key, order) => {
  let sortedArr = arr.sort(function (a, b) {
    if (a[key] && b[key]) {
      var _a = a[key]; // ignore upper and lowercase
      var _b = b[key]; // ignore upper and lowercase
      if (order === true) {
        // redosled po abecedi
        if (_a < _b) {
          return -1;
        }
        if (_a > _b) {
          return 1;
        }
      } else {
        // ukoliko je obrnut redosled
        if (_a < _b) {
          return 1;
        }
        if (_a > _b) {
          return -1;
        }
      }
      // names must be equal
      return 0;
    }
    return 0; // ako lsucjano ne postoji key ili vrednost onda se ponasa bez promena
  });
  return sortedArr;
};



