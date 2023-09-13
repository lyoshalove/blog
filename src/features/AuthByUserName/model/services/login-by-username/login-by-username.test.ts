import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config';
import { TestAsyncThunk } from 'shared/lib/tests/test-async-thunk';
import { loginByUsername } from './login-by-username';

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

describe('login-by-username.test', () => {
  let dispatch: Dispatch;
  let getState: () => StateSchema;

  //   beforeEach(() => {
  //     dispatch = jest.fn();
  //     getState = jest.fn();
  //   });

  test('should be success', async () => {
    const userValue = {
      username: 'admin', id: '1',
    };

    mockedAxios.post.mockReturnValue(Promise.resolve({
      data: userValue,
    }));

    // const action = loginByUsername({ username: 'admin', password: '123' });
    // const result = await action(dispatch, getState, undefined);

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: 'admin', password: '123' });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userValue);
  });

  test('should be rejected', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

    // const action = loginByUsername({ username: 'admin', password: '123' });
    // const result = await action(dispatch, getState, undefined);

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: 'admin', password: '123' });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('error');
  });
});
