import { StateSchema } from 'app/providers/StoreProvider/config';
import { getLoginError } from '../get-login-error';

describe('getLoginError.test', () => {
  test('should return error', () => {
    const store: DeepPartial<StateSchema> = {
      login: {
        error: 'error',
      },
    };

    expect(getLoginError(store as StateSchema)).toEqual('error');
  });

  test('should return undefined with empty state', () => {
    const store = {};

    expect(getLoginError(store as StateSchema)).toEqual(undefined);
  });
});
