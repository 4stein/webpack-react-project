import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { counterActions } from '../model/slice/CounterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

interface CounterProps {
  className?: string;
}

export const Counter = ({ className }: CounterProps) => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div className={classNames('', {}, [className])}>
      <h2 data-testid="value-title">{counterValue}</h2>
      <Button onClick={increment} data-testid="increment-btn">
        +
      </Button>
      <Button onClick={decrement} data-testid="decrement-btn">
        -
      </Button>
    </div>
  );
};
