import { Navigate, Route, Routes } from 'react-router-dom';
import LayoutHome from './LayoutHome';
import HomePage from 'pages/HomePage/HomePage';
import RatesPage from 'pages/RatesPage/RatesPage';
import { useEffect } from 'react';
import { getCurrentPosition } from 'service/getCurrentPosition';

export const App = () => {
  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      getCurrentPosition(pos.coords);
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<LayoutHome />}>
        <Route index element={<HomePage />} />
        <Route path="rates" element={<RatesPage />} />
      </Route>
      <Route path="*" element={<Navigate to={'/'} />} />
    </Routes>
  );
};
