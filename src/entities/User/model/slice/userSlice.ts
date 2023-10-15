import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localstorage';
import { UserSchema, User } from '../types/user';

const initialState: UserSchema = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthData: (state: any) => {
      const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);

      if (user) {
        state.authData = JSON.parse(user);
      } else {
        state.authData = undefined;
      }
    },
    logout: (state: any) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
    },
  },
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
