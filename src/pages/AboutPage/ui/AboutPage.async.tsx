/* eslint-disable linebreak-style */
/* eslint-disable arrow-parens */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
import { lazy } from 'react';

export const AboutPageAsync = lazy(
  () =>
    new Promise(resolve => {
      // @ts-ignore
      setTimeout(() => resolve(import('./AboutPage')), 1500);
    })
);
