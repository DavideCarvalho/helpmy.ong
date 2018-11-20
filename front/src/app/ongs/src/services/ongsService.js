/* eslint-disable import/prefer-default-export */
export const getOngs = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos');
  const jsonData = await data.json();
  return jsonData;
};
