import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { DynamicModuleLoader } from 'shared/lib/components';
import { ReducersList } from 'shared/lib/components/dynamic-module-loader';
import { profileReducer } from '../../../entities/profile';

interface ProfilePageProps {
  className?: string
}

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = memo(({ className }: ProfilePageProps) => {
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(className)}>
        <h2>SNUS</h2>
      </div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
