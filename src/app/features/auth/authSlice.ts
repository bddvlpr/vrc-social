import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  accessToken?: string;
  userId?: string;
}

const initialState: AuthState = {
  accessToken: undefined,
  userId: undefined
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state: AuthState, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    logOut: (state: AuthState) => {
      state.accessToken = undefined;
      state.userId = undefined;
    }
  }
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
