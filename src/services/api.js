export const api = {
  async getRates() {
    const response = await fetchData(
      'https://www.cbr-xml-daily.ru/daily_json.js',
    );
    return response.Valute;
  },
};

const fetchData = async (url) => {
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => console.error(error));
};
