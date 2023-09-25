import { StateSchema } from 'app/providers/StoreProvider/config';
import { ValidateProfileError } from '../../types';
import { getProfileValidateErrors } from '../get-profile-validate-error';

describe('get-profile-validate-error.ts', () => {
  test('should return errors', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateError: [ValidateProfileError.INCORRECT_AGE, ValidateProfileError.INCORRECT_COUNTRY],
      },
    };

    expect(getProfileValidateErrors(state as StateSchema))
      .toEqual([ValidateProfileError.INCORRECT_AGE, ValidateProfileError.INCORRECT_COUNTRY]);
  });

  test('should return undefined', () => {
    expect(getProfileValidateErrors({} as StateSchema)).toEqual(undefined);
  });
});
