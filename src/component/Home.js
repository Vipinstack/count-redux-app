import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {Add} from '../redux/Action/index';

const Home = () => {
const myState= useSelector((state) => state.AddCount);
console.log(myState);
const dispatch = useDispatch();

    return (
        <div>
            <h1>hello i am home componets..{myState}</h1>
            <button onClick={() => dispatch(Add())} state={myState} myState={myState}>Submit</button>
        </div>
    )
}

export default Home
