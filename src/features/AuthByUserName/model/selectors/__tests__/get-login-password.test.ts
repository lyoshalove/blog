import { StateSchema } from 'app/providers/StoreProvider/config';
import { getLoginPassword } from '../get-login-password';

describe('getLoginPassword.test', () => {
  test('should return password', () => {
    const store: DeepPartial<StateSchema> = {
      login: {
        password: 'admin',
      },
    };

    expect(getLoginPassword(store as StateSchema)).toEqual('admin');
  });

  test('should return empty string with empty store', () => {
    const store = {};

    expect(getLoginPassword(store as StateSchema)).toEqual('');
  });
});
