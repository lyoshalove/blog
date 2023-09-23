import { StateSchema } from 'app/providers/StoreProvider/config';
import { getCounterValue } from './getCounterValue';

describe('should return counter value', () => {
  test('getCounterValue', () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 10,
      },
    };

    expect(getCounterValue(state as StateSchema)).toEqual(10);
  });
});
