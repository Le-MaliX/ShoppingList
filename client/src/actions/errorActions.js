import { GET_ERRORS, CLEAR_ERRORS } from './types';

// Return errors
export const retunErrors = (msg, status, id = null) => ({
  type: GET_ERRORS,
  payload: { msg, status, id },
});

// Clear errors
export const clearErrors = () => ({ type: CLEAR_ERRORS });
