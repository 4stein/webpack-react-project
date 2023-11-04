/* eslint-disable linebreak-style */
import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

type ActionCreatorType<Return, Arg, RejectedValue> = (
  // eslint-disable-next-line no-unused-vars
  arg: Arg
) => AsyncThunkAction<
  Return,
  Arg,
  {
    rejectValue: RejectedValue;
  }
>;

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>;
  // eslint-disable-next-line lines-between-class-members
  getState: () => StateSchema;
  // eslint-disable-next-line lines-between-class-members
  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

  // eslint-disable-next-line no-useless-constructor
  constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, undefined);

    return result;
  }
}
