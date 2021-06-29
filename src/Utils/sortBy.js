export const sortByText = (list, type, asc = false) => {
  asc ?
    list.sort((prev, next) =>
      prev[type].toLowerCase() < next[type].toLowerCase() ?
        -1 :
        prev[type].toLowerCase() > next[type].toLowerCase() ?
          1 :
          0
    ) :
    list.sort((prev, next) =>
      prev[type].toLowerCase() > next[type].toLowerCase() ?
        -1 :
        prev[type].toLowerCase() < next[type].toLowerCase() ?
          1 :
          0
    );
  return list;
};

export const sortByNum = (list, type, asc = false) => {
  asc ?
    list.sort((prev, next) => next[type] - prev[type]) :
    list.sort((prev, next) => prev[type] - next[type]);
  return list;
};