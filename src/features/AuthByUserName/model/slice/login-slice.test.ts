import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/login-schema';
import { loginActions, loginReducer } from './login-slice';

describe('loginSlice.test', () => {
  test('test set username', () => {
    const store: DeepPartial<LoginSchema> = {
      username: 'Snus',
    };

    expect(
      loginReducer(store as LoginSchema, loginActions.setUsername('Snusik')),
    ).toEqual({ username: 'Snusik' });
  });

  test('test set password', () => {
    const store: DeepPartial<LoginSchema> = {
      password: '123',
    };

    expect(
      loginReducer(store as LoginSchema, loginActions.setPassword('admin')),
    ).toEqual({ password: 'admin' });
  });
});
