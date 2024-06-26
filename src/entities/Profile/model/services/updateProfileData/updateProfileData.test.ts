/* eslint-disable linebreak-style */

import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData } from './updateProfileData';
import { ValidateProfileError } from '../../types/profile';

const data = {
  username: 'admin',
  age: 22,
  country: Country.Ukraine,
  firstName: 'Mike',
  lastName: 'Stein',
  city: 'Lviv',
  currency: Currency.USD,
};

describe('updateProfileData.test', () => {
  test('success fetch Profile', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      // @ts-ignore
      profile: {
        form: data,
      },
    });

    thunk.api.put.mockReturnValue(
      Promise.resolve({
        data,
      })
    );

    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error fetch Profile', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      // @ts-ignore
      profile: {
        form: data,
      },
    });
    thunk.api.put.mockReturnValue(
      Promise.resolve({
        status: 403,
      })
    );
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
  });

  test('validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      // @ts-ignore
      profile: {
        form: { ...data, lastName: '' },
      },
    });

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });
});
