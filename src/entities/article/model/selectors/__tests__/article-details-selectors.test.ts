import { StateSchema } from 'app/providers/StoreProvider/config';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../article-details-selectors';

describe('getArticleDetailsIsLoading', () => {
  test('should return loading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true,
      },
    };

    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
  });

  test('should return undefined', () => {
    expect(getArticleDetailsIsLoading({} as StateSchema)).toEqual(undefined);
  });
});

describe('getArticleDetailsError', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'Some error',
      },
    };

    expect(getArticleDetailsError(state as StateSchema)).toEqual(
      'Some error',
    );
  });

  test('should return undefined', () => {
    expect(getArticleDetailsError({} as StateSchema)).toEqual(undefined);
  });
});

describe('getArticleDetailsData', () => {
  test('should return article', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data: {
          id: '0',
        },
      },
    };

    expect(getArticleDetailsData(state as StateSchema)).toEqual({
      id: '0',
    });
  });

  test('should return undefined', () => {
    expect(getArticleDetailsData({} as StateSchema)).toEqual(undefined);
  });
});
