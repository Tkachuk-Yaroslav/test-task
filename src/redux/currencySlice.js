import { createSlice } from '@reduxjs/toolkit';
import { fetchBaseCurrency } from './operations';

export const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    baseCurrency: '',
  },
    extraReducers: {
        [fetchBaseCurrency.fulfilled]: (state, action) => {
            state.baseCurrency = action.payload
      }
  },
});

