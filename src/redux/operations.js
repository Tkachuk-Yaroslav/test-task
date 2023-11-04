import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCurrentPosition } from 'service/getCurrentPosition';

export const fetchBaseCurrency = createAsyncThunk(
  'currency/base',
  async (coords, thunkApi) => {
    try {
      const data = await getCurrentPosition(coords);
      console.log(data);
      return data.results[0].annotations.currency.iso_code;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
