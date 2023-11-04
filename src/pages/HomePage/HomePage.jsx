import React from 'react';
import { Form } from '../../components/Form/Form';
import { useSelector } from 'react-redux';
import { selectResults } from 'redux/selectors';

const HomePage = () => {
  const results = useSelector(selectResults);
  return (
    <>
      <Form />
      {results > 0 && <p>{results}</p>}
    </>
  );
};

export default HomePage;
