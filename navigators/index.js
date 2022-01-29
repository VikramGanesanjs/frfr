import React from 'react';
import { CurrentDateProvider } from '../components/CurrentDateContext';
import { SelectedListProvider } from '../components/SelectedListProvider';

import { AuthenticatedUserProvider } from './AuthenticatedUserProvider';
import RootNavigator from './RootStack';

/**
 * Wrap all providers here
 */

export default function Routes() {
  return (
    <AuthenticatedUserProvider>
      <SelectedListProvider>
      <CurrentDateProvider>
      <RootNavigator />
      </CurrentDateProvider>
      </SelectedListProvider>
    </AuthenticatedUserProvider>
  );
}