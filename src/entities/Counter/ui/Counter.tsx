import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { counterActions } from '../model/slice/CounterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
  const counterValue = useSelector(getCounterValue);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">
        {t(`${counterValue}`)}
      </h1>
      <Button onClick={increment} data-testid="increment-btn">
        {t('increment')}
      </Button>
      <Button onClick={decrement} data-testid="decrement-btn">
        {t('decrement')}
      </Button>
    </div>
  );
};
