// @flow

import { createAction } from 'redux-actions';

export const MAKE_BARK = 'MAKE_BARK';
export const makeBark = createAction(MAKE_BARK, () => true);

/* export const makeBark = () => ({
  type: MAKE_BARK,
  payload: true,
}) */
