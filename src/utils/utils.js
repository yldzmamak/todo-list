export function finder(data, id) {
  const filteredData = data.filter(item => item.id !== id);
  const foundData = data.find(item => item.id === id);
  return { filteredData, foundData };
}

export function filterData(currentData, payload) {
  const { filteredData } = finder(currentData, payload.id);
  return [...filteredData];
}

export function updateData(currentData, payload) {
  const { foundData, filteredData } = finder(currentData, payload.id);
  foundData && (foundData.text = payload.text);
  const newData = foundData ? foundData : payload;
  return [...filteredData, newData];
}

export const sortParamsWithId = (a, b) => {
  return b.id - a.id;
};
