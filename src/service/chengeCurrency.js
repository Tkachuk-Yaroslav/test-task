var myHeaders = new Headers();
myHeaders.append('apikey', 'tzDy6aIAhsw5ghil4aQ4S69bGDYgTFy5');

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders,
};

export const exchangeCurrency = ({ to, from, amount }) => {
  return fetch(
    `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
    requestOptions
  ).then(response => response.json());
};

export const latesValues = (symbols, base) => {
  return fetch(
    `https://api.apilayer.com/exchangerates_data/latest?symbols=${symbols}&base=${base}`,
    requestOptions
  );
};

export const fetchAllSymbols = () => {
  return fetch(
    'https://api.apilayer.com/exchangerates_data/symbols',
    requestOptions
  );
};
// fetch('https://api.apilayer.com/exchangerates_data/symbols', requestOptions);
// 'https://api.apilayer.com/exchangerates_data/convert?to=USD&from=UAH&amount=15';
// fetch(
// 'https://api.apilayer.com/exchangerates_data/latest?symbols=usd,jpy&base=uah',
// requestOptions,
// );
