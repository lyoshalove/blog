import { StateSchema } from 'app/providers/StoreProvider/config';
import { profileData } from './profile-data';
import { getProfileForm } from '../get-profile-form';

describe('get-profile-form.ts', () => {
  test('should return data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: profileData,
      },
    };

    expect(getProfileForm(state as StateSchema)).toEqual(profileData);
  });

  test('should return undefined', () => {
    expect(getProfileForm({} as StateSchema)).toEqual(undefined);
  });
});
