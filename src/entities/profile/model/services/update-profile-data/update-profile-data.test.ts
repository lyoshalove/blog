import axios from 'axios';
import { TestAsyncThunk } from 'shared/lib/tests/test-async-thunk';
import { updateProfileData } from './update-profile-data';

import { Currency } from '../../../../../entities/currency';
import { Country } from '../../../../../entities/country';
import { ValidateProfileError } from '../../types';

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

export const profileData = {
  id: '1',
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

describe('update-profile-data.test', () => {
  test('should be success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: profileData,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({
      data: profileData,
    }));
    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(profileData);
  });

  test('should be rejected', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: profileData,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
  });

  test('should be rejected by client error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: {
          ...profileData,
          firstname: undefined,
        },
      },
    });
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });
});
