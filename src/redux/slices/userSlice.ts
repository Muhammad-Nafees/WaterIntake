import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface InitialState {
  login: boolean;
}

const initialState: InitialState = {
  login: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,

  reducers: {
    userLogin: (state, {payload}: PayloadAction<boolean>) => {
      state.login = payload;
    },
  },
});

export const {userLogin} = userSlice.actions;
export default userSlice.reducer;
