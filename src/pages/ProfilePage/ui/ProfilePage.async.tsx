/* eslint-disable linebreak-style */
/* eslint-disable arrow-parens */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
import { lazy } from 'react';

export const ProfilePageAsync = lazy(
  () =>
    new Promise(resolve => {
      // @ts-ignore
      setTimeout(() => resolve(import('./ProfilePage')), 1500);
    })
);
