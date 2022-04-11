import React, {SyntheticEvent, useReducer} from 'react';
import {User} from '../types/interface_User';
import {userReducer} from '../utlis/reducer_User';

interface Props {
    setValidationError: any;
    setUsersList: any;
}

const Form = ({setValidationError, setUsersList}: Props) => {
    const [user, dispatchUser] = useReducer(userReducer, {name: '', age: 0});

    const submitHandler = (e: SyntheticEvent) => {
        e.preventDefault();

        if (user.name.trim().length < 3) {
            setValidationError({
                type: 'SET_SHOW',
                payload: true,
            })
            setValidationError({
                type: 'SET_MESSAGE',
                payload: 'Please provide correct name of minimum 3 characters.',
            })
            return;
        }

        if (user.age < 1) {
            setValidationError({
                type: 'SET_SHOW',
                payload: true,
            })
            setValidationError({
                type: 'SET_MESSAGE',
                payload: 'Member must be 1 years old at least.',
            })
            return;
        }

        setUsersList((prev: User[]) => [...prev, user]);
        dispatchUser({type: 'CHANGE_NAME', payload: ''});
        dispatchUser({type: 'CHANGE_AGE', payload: 0});
    };

    return <form>
        <label>Username:
            <input type="text"
                   value={user.name}
                   onChange={e => dispatchUser({type: 'CHANGE_NAME', payload: e.target.value})}/>
        </label>
        <label>Age (years):
            <input type="number"
                   value={user.age}
                   onChange={e => dispatchUser({type: 'CHANGE_AGE', payload: Number(e.target.value)})}/>
        </label>
        <button type="submit"
                onClick={submitHandler}>add
        </button>
    </form>
}

export {Form};