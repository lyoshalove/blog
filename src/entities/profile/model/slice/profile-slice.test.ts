import { fetchProfileData } from '../services/fetch-profile-data';
import { updateProfileData } from '../services/update-profile-data';
import { ProfileSchema, ValidateProfileError } from '../types';
import { profileActions, profileReducer } from './profile-slice';

describe('profileSlice.test', () => {
  test('test set readonly', () => {
    const store: DeepPartial<ProfileSchema> = {
      readonly: false,
    };

    expect(
      profileReducer(store as ProfileSchema, profileActions.setReadOnly(true)),
    ).toEqual({ readonly: true });
  });

  test('test set cancel edit', () => {
    const store: DeepPartial<ProfileSchema> = {
      readonly: false,
      validateError: [ValidateProfileError.INCORRECT_AGE],
      data: {
        firstname: 'ALEX',
      },
    };

    expect(
      profileReducer(
        store as ProfileSchema,
        profileActions.cancelEdit(),
      ),
    ).toEqual({
      readonly: true,
      validateError: undefined,
      data: {
        firstname: 'ALEX',
      },
      form: {
        firstname: 'ALEX',
      },
    });
  });

  test('test update profile', () => {
    const store: DeepPartial<ProfileSchema> = {
      form: {
        firstname: 'ALEX',
      },
    };

    expect(
      profileReducer(store as ProfileSchema, profileActions.updateProfile({
        firstname: 'Alex',
      })),
    ).toEqual({
      form: {
        firstname: 'Alex',
      },
    });
  });

  test('test pending fetch profile', () => {
    const store: DeepPartial<ProfileSchema> = {
      error: 'SNUS',
      isLoading: false,
    };

    expect(
      profileReducer(store as ProfileSchema, fetchProfileData.pending),
    ).toEqual({
      error: undefined,
      isLoading: true,
    });
  });

  // test('test fulfilled fetch profile', () => {
  //   const store: DeepPartial<ProfileSchema> = {
  //     isLoading: true,
  //   };
  //   const data = {
  //     username: 'Alex',
  //     lastname: 'Snus',
  //   };

  //   expect(
  //     profileReducer(store as ProfileSchema, fetchProfileData.fulfilled(data, '')),
  //   ).toEqual({
  //     isLoading: false,
  //     data,
  //     form: data,
  //   });
  // });

  test('test pending update profile', () => {
    const store: DeepPartial<ProfileSchema> = {
      validateError: [ValidateProfileError.SERVER_ERROR],
      isLoading: false,
    };

    expect(
      profileReducer(store as ProfileSchema, updateProfileData.pending),
    ).toEqual({
      validateError: undefined,
      isLoading: true,
    });
  });

  test('test fulfilled update profile', () => {
    const store: DeepPartial<ProfileSchema> = {
      isLoading: true,
      readonly: false,
    };
    const data = {
      username: 'Alex',
      lastname: 'Snus',
    };

    expect(
      profileReducer(store as ProfileSchema, updateProfileData.fulfilled(data, '')),
    ).toEqual({
      isLoading: false,
      data,
      form: data,
      readonly: true,
    });
  });
});
