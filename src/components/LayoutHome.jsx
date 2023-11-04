import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { selectBaseCurrency } from 'redux/selectors';

const LayoutHome = () => {
  const baseCurrency = useSelector(selectBaseCurrency);
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'rates'}>Rates</Link>
            </li>
          </ul>
        </nav>
        {baseCurrency && <p>Your base currency: {baseCurrency}</p>}
      </header>
      <Outlet />
    </>
  );
};

export default LayoutHome;
