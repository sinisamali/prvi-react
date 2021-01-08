


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



