const url = process.env.API_URL;

export const getOngs = async () => {
  const data = await fetch(`${url}/ongs`);
  return data.json() || [];
};

export const getOng = async (ongId) => {
  const data = await fetch(`${url}/ongs/${ongId}`);
  return data.json();
};
