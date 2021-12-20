import React from 'react';

import { AuthenticatedUserProvider } from './AuthenticatedUserProvider';
import RootNavigator from './RootStack';

/**
 * Wrap all providers here
 */

export default function Routes() {
  return (
    <AuthenticatedUserProvider>
      <RootNavigator />
    </AuthenticatedUserProvider>
  );
}