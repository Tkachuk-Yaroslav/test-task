import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchChangeCurrency } from 'redux/operations';

export const Form = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const { value } = e.target.elements.currency;
    const [amount, from, , to] = value.split(' ');

    dispatch(fetchChangeCurrency({ amount, from, to }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" name="currency" placeholder="15 USD in UAH" />
      </label>
      <button type="submit">Change</button>
    </form>
  );
};
