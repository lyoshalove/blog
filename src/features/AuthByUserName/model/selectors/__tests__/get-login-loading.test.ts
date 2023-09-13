import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config';
import { getLoginLoading } from '../get-login-loading';

describe('getLoginLoading.test', () => {
  test('should return true loading', () => {
    const store: DeepPartial<StateSchema> = {
      login: {
        isLoading: true,
      },
    };

    expect(getLoginLoading(store as StateSchema)).toEqual(true);
  });

  test('should return false with empty store', () => {
    const store = {};

    expect(getLoginLoading(store as StateSchema)).toEqual(false);
  });
});
