import axios from 'axios';
import { TestAsyncThunk } from 'shared/lib/tests/test-async-thunk';
import { fetchArticleById } from './fetch-article-by-id';

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

describe('fetch-article-by-id.test', () => {
  test('should be success', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);
    thunk.api.get.mockReturnValue(
      Promise.resolve({
        data: {
          id: 0,
        },
      }),
    );
    const result = await thunk.callThunk('0');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual({
      id: 0,
    });
  });

  test('should be rejected', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk('0');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('error');
  });
});
