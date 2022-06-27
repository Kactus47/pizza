import { increment, decrement } from '../redux/counterSlice';
import { useSelector, useDispatch } from 'react-redux';

function Counter() {

  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return(
    <div className="counter">
      <button onClick={() => dispatch(decrement())} className="remove">-1</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())} className="add">+1</button>
    </div>
  );
}

export default Counter;