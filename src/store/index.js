import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';

/**
 * Central Redux store configuration.
 *
 * Each reducer manages an isolated slice of the application state:
 * - counter: Handles counter-related state and actions.
 * - auth: Handles authentication and user session state.
 */
const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;
