import { createAsyncThunk } from '@reduxjs/toolkit';
import { async } from 'q';
import { exchangeCurrency } from 'service/chengeCurrency';
import { getCurrentPosition } from 'service/getCurrentPosition';

export const fetchBaseCurrency = createAsyncThunk(
  'currency/base',
  async (coords, thunkApi) => {
    const { baseCurrency } = thunkApi.getState();
    if (baseCurrency) {
      return thunkApi.rejectWithValue('there is already a base currency');
    }
    try {
      const data = await getCurrentPosition(coords);
      return data.results[0].annotations.currency.iso_code;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchChangeCurrency = createAsyncThunk(
  'currency/exchangeCurrency',
  async (cradantials, thunkApi) => {
    try {
      const data = await exchangeCurrency(cradantials);
      return data;
    } catch (error) {}
  }
);
