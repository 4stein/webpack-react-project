/* eslint-disable linebreak-style */
/* eslint-disable arrow-parens */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(
  () =>
    new Promise(resolve => {
      // @ts-ignore
      setTimeout(() => resolve(import('./LoginForm')), 1500);
    })
);
