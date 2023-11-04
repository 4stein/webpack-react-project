/* eslint-disable linebreak-style */
import { DeepPartial } from '@reduxjs/toolkit';
import { loginActions, loginReducer } from './loginSlice';
import { LoginSchema } from '../types/loginSchema';

/* eslint-disable linebreak-style */
describe('loginSlice.test', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = {
      username: 'admin',
    };
    expect(
      loginReducer(state as LoginSchema, loginActions.setUsername('admin'))
    ).toEqual({ username: 'admin' });
  });

  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = {
      password: '123123',
    };
    expect(
      loginReducer(state as LoginSchema, loginActions.setPassword('123123'))
    ).toEqual({ password: '123123' });
  });
});
