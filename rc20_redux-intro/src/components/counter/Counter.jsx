import {useDispatch, useSelector} from 'react-redux';
import './Counter.css';
import { CLR, DEC, INC } from '../../store/counterReduser';

const Counter = () => {
  // ? global statt'in consume yapilmasi

  // const count = useSelector (state => state.counter.count);
  const {count }= useSelector ((state) => state.counter)
  const dispatch = useDispatch ();

  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>counter:{count}</h1>
      <div>
        <button
          className="counter-button positive"
          onClick={() => dispatch ({type: INC})}
        >
          increase
        </button>
        <button
          className="counter-button zero"
          onClick={() => dispatch ({type: CLR})}
        >
          reset
        </button>
        <button
          className="counter-button negative"
          onClick={() => dispatch ({type: DEC})}
        >
          decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
