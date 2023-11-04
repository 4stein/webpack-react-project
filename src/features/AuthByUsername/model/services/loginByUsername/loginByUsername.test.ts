/* eslint-disable linebreak-style */
import axios from 'axios';

import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { userActions } from 'entities/User';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('getLoginUsername.test', () => {
  test('success login', async () => {
    const userValue = { username: 'admin', id: '1' };
    mockedAxios.post.mockReturnValue(
      Promise.resolve({
        data: userValue,
      })
    );

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({
      username: 'admin',
      password: '123',
    });

    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(userValue)
    );
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userValue);
  });

  test('error login', async () => {
    mockedAxios.post.mockReturnValue(
      Promise.resolve({
        status: 403,
      })
    );
    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({
      username: 'admin',
      password: '123',
    });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
  });

  // let dispatch: Dispatch;
  // let getState: () => StateSchema;
  // const userValue = { username: 'admin', password: '123', id: '1' };
  // beforeEach(() => {
  //   dispatch = jest.fn();
  //   getState = jest.fn();
  // });
  // test('success login', async () => {
  //   mockedAxios.post.mockReturnValue(
  //     Promise.resolve({
  //       data: userValue,
  //     })
  //   );
  //   const action = loginByUsername(userValue);
  //   const result = await action(dispatch, getState, undefined);
  //   expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
  //   expect(dispatch).toHaveBeenCalledTimes(3);
  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(result.meta.requestStatus).toBe('fulfilled');
  //   expect(result.payload).toEqual(userValue);
  // });
  // test('error login', async () => {
  //   mockedAxios.post.mockReturnValue(
  //     Promise.resolve({
  //       status: 403,
  //     })
  //   );
  //   const action = loginByUsername(userValue);
  //   const result = await action(dispatch, getState, undefined);
  //   expect(dispatch).toHaveBeenCalledTimes(2);
  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(result.meta.requestStatus).toBe('rejected');
  //   expect(result.payload).toBe('error');
  // });
});
