import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Naomi Osaka',
  cardDetails: {
    cardNumber: '4012 2368 8918 1537',
    cardExpiry: '05/27',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser(state, action) {
      state.name = action.payload;
    },
    updateCardDetails(state, action) {
      state.cardDetails.cardNumber = action.payload.cardNumber;
      state.cardDetails.cardExpiry = action.payload.cardExpiry;
    },
  },
});

export const { updateUser, updateCardDetails } = userSlice.actions;
export default userSlice.reducer;
