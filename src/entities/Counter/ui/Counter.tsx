import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/ui/Button";
import { counterActions } from "../model/slice/CounterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

export const Counter = () => {
  const counterValue = useSelector(getCounterValue);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">Value: {counterValue}</h1>
      <Button onClick={increment} data-testid="increment-btn">
        increment
      </Button>
      <Button onClick={decrement} data-testid="decrement-btn">
        decrement
      </Button>
    </div>
  );
};
