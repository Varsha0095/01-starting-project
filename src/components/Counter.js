import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';


const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter);

  const incrementHandler = () => {
    dispatch({type: 'increment', value: 1});
  };

  const decrementHandler = () => {
    dispatch({type: 'decrement', value: 1})
  };

  const incrementByFiveHandler = () => {
    dispatch({type: 'incrementByFive', value: 5});
  };

  const decrementByFiveHandler = () => {
    dispatch({type: 'decrementByFive', value: 5});
  };

  const toggleCounterHandler = () => {
    dispatch({type: 'toggle'});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <div>
        <button onClick={incrementByFiveHandler}>Increment By 5</button>
        <button onClick={decrementByFiveHandler}>Decrement By 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
