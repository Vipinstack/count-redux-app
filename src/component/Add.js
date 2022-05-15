import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Add } from '../redux/Action';

const AddNumber = (props) => {
    const state = useSelector(state => state.AddCount);
    const dispatch = useDispatch();
    return (
        <div>
            Hello sir ..{state}
            <button onClick={() =>dispatch(Add())}>Submit</button>
            
        </div>
    )
}

export default AddNumber;
