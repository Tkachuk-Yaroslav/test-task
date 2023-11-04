var myHeaders = new Headers();
myHeaders.append('apikey', 'Bqf0jgud3HsN3E435u3LbG7qgqDyjvOj');

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
// fetch('https://api.apilayer.com/exchangerates_data/symbols', requestOptions);
// 'https://api.apilayer.com/exchangerates_data/convert?to=USD&from=UAH&amount=15';
// fetch(
//   'https://api.apilayer.com/exchangerates_data/latest?symbols=usd,jpy&base=uah',
//   requestOptions,
// );
