import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';

interface AuthState {
  accessToken?: string;
}

const initialState: AuthState = {
  accessToken: undefined
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
    }
  }
});

export const useAuthSlice = () =>
  useSelector((state: RootState) => state.authSlice);
export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
