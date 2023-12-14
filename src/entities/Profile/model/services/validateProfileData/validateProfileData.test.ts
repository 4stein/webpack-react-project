/* eslint-disable linebreak-style */
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { validateProfileData } from './validateProfileData';
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

describe('validateProfileData.test', () => {
  test('success validate Profile Data', async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('validate Profile Data without first and Last name', async () => {
    const result = validateProfileData({
      ...data,
      firstName: '',
      lastName: '',
    });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test('validate Profile Data incorrect age', async () => {
    const result = validateProfileData({
      ...data,
      age: undefined,
    });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test('validate Profile Data incorrect country', async () => {
    const result = validateProfileData({
      ...data,
      country: undefined,
    });

    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });

  test('validate Profile Data incorrect all', async () => {
    const result = validateProfileData({});

    console.log(result);

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
});
