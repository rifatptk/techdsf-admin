import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  isLoggedIn: true,
  user: {},
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const user = { username: 'techdsf', password: '1234' };
      const { username, password } = action.payload;

      if (username === user.username && password === user.password) {
        state.isLoggedIn = true;
        state.user = { username };
      } else {
        toast('Authentication failed!', {
          position: 'top-left',
          type: 'error',
          draggable: true,
        });
      }
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
