import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, reset } from './counterSlice';

import './Counter.css';

export const Counter = () => {

    const [incrementValue, setIncrementValue] = useState(0);

    const count = useSelector((state) => state.counter.value)

    const dispatch = useDispatch()


    return (
        <div className="mainCounterContainer">

            <button className="btn" onClick={() => dispatch(increment())}>Increment</button>

            <button className="btn" onClick={() => dispatch(decrement())}>Decrement</button>

            <label className="inpt">
                Set Increment Value:
                <input className='inptbox' type="number" value={incrementValue} onChange={(e) => setIncrementValue((e.target.value))} />
            </label>

            <button disabled={incrementValue == '' ? true : false} className={incrementValue != '' ? "btn" : ''} onClick={() => dispatch(incrementByAmount(parseInt(incrementValue)))}>Increment By {incrementValue}</button>


            <button className="btn" onClick={() => dispatch(reset())}>Reset</button>

            <div className="count">
                {count}
            </div>

        </div>)

}