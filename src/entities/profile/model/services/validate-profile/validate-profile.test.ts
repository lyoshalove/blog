import { Currency } from '../../../../../entities/currency';
import { Country } from '../../../../../entities/country';
import { validateProfile } from './validate-profile';
import { ValidateProfileError } from '../../types';

export const profileData = {
  firstname: 'Alex',
  lastname: 'Snus',
  age: 22,
  currency: Currency.RUB,
  country: Country.RUSSIA,
  city: 'Moscow',
  username: 'admin',
  // eslint-disable-next-line max-len
  avatar: 'https://media.discordapp.net/attachments/1123128165146042369/1149617910248132618/d3CHSe-sKbI.png?width=748&height=936',
};

describe('validate-profile.test', () => {
  test('should be success', async () => {
    const result = validateProfile();

    expect(result).toEqual([ValidateProfileError.NO_DATA]);
  });

  test('without firstname', () => {
    const result = validateProfile({ ...profileData, firstname: '' });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test('without lastname', () => {
    const result = validateProfile({ ...profileData, lastname: '' });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test('incorrect age', () => {
    const result = validateProfile({ ...profileData, age: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test('incorrect country', () => {
    const result = validateProfile({ ...profileData, country: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });

  test('should return client all errors', () => {
    const result = validateProfile({});

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
});
