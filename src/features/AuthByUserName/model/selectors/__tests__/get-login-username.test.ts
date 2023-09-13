import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config';
import { getLoginUsername } from '../get-login-username';

describe('getLoginUsername.test', () => {
  test('should return username', () => {
    const store: DeepPartial<StateSchema> = {
      login: {
        username: 'Snus',
      },
    };

    expect(getLoginUsername(store as StateSchema)).toEqual('Snus');
  });

  test('should return empty string with empty store', () => {
    const store = {};

    expect(getLoginUsername(store as StateSchema)).toEqual('');
  });
});
