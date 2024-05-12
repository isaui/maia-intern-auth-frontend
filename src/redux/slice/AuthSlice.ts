import { UserDTO } from '@/api/endpoint';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface AuthState {
  user: UserDTO | undefined;
}

const initialState: AuthState = {
  user: undefined
};

export const authSlice : any= createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ user: UserDTO }>) => {
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.user = undefined;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;