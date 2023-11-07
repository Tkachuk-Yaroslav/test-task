import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectBaseCurrency } from 'redux/selectors';
import { fetchAllSymbols, latesValues } from 'service/chengeCurrency';
import RateItems from './RateItems';

const RatesList = () => {
  const [objForMap, setObjForMap] = useState([]);
  const baseCurrency = useSelector(selectBaseCurrency);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchAllSymbols();
        const data = await response.json();
        console.log(data);

        const keysArray = Object.keys(data.symbols);
        console.log(keysArray);
        const symbolsString = keysArray.join(', ');
        console.log(symbolsString);

        const freshResponse = await latesValues(symbolsString, baseCurrency);
        const freshData = await freshResponse.json();
        console.log(freshData, '>>');

        const objForMap = Object.entries(freshData.rates).map(
          ([key, value]) => ({ key, value })
        );

        setObjForMap(objForMap); // Зберігаємо `objForMap` в стані
        console.log(objForMap);
      } catch (error) {
        console.error('Помилка при отриманні даних:', error);
      }
    }

    fetchData();
  }, [baseCurrency]);

  //   useEffect(() => {
  //     async function fetchData() {
  //       try {
  //         // Виконуємо асинхронні операції, наприклад, запит до API
  //         const response = await fetchAllSymbols();
  //         const data = await response.json();

  //         // Зробіть що-небудь із отриманими даними, наприклад, оновіть стан компоненту
  //         console.log(data);
  //         const keysArray = Object.keys(data.symbols);
  //         console.log(keysArray);
  //         const symbolsString = keysArray.join(', ');
  //         console.log(symbolsString);

  //         const freshResponse = await latesValues(symbolsString, baseCurrency);
  //         const freshData = await freshResponse.json();
  //         console.log(freshData, '>>');
  //         const objForMap = Object.entries(freshData.rates).map(
  //           ([key, value]) => ({ key, value })
  //         );
  //         setObjForMap(objForMap);
  //         // setObjForMap(
  //         //   Object.entries(freshData.rates).map(([key, value]) => ({
  //         //     key,
  //         //     value,
  //         //   }))
  //         // );
  //         console.log(objForMap);
  //       } catch (error) {
  //         console.error('Помилка при отриманні даних:', error);
  //       }
  //     }

  //     fetchData();
  //   }, [baseCurrency, objForMap]);

  return (
    <ul>
      {objForMap.map(({ key, value }) => {
        return (
          <li key={key}>
            <RateItems currency={key} value={value} />
          </li>
        );
      })}

      {/* {objForMap.map((item, index) => (
        <li key={index}>
          1 {item.key} = {1 / item.value} UAH
        </li>
      ))} */}
    </ul>
  );
};

export default RatesList;
