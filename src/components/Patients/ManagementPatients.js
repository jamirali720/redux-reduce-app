import React, { useReducer, useRef } from 'react';
import { patientsReducer, patientsState } from './Reducer';

const ManagementPatients = () => {
    const [state, dispatch] = useReducer(patientsReducer, patientsState);
    const nameRef = useRef();
    const handleSubmit = event=> {
        event.preventDefault()
        dispatch({
            type: 'ADD_PATIENT',
            id: state.patients.length + 1,
            name: nameRef.current.value,
        })
        nameRef.current.value = '';
    }
    return (
        <div>
            <h1>Patients : {state.patients.length} </h1>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} />
            </form>
            {
                state.patients.map(pt =>
                <li
                 key={pt.id}
                 onClick={()=> dispatch({type: 'REMOVE_PATIENT', id: pt.id})}
                >{pt.name} </li>)
            }

        </div>
    );
};

export default ManagementPatients;