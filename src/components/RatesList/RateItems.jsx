import React from 'react';
import { useSelector } from 'react-redux';
import { selectBaseCurrency } from 'redux/selectors';

const RateItems = ({ currency, value }) => {
  const baseCurrency = useSelector(selectBaseCurrency);

  return (
    <div>
      1 {currency} = {(1 / value).toFixed(4)} {baseCurrency}
    </div>
  );
};

export default RateItems;
