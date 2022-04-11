import React, {SyntheticEvent, useReducer} from 'react';
import {User} from '../../types/interface_User';
import {userReducer} from '../../utlis/reducer_User';
import {Input} from '../UI/Input';
import {Button} from '../UI/Button';
import styles from './Form.module.css'

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

    return <form className={styles.form}>
        <Input inputType="text"
               labelTag="Username:"
               onChangeHandler={dispatchUser}
               actionType="CHANGE_NAME"
               value={user.name}/>

        <Input inputType="number"
               labelTag="Age (years):"
               onChangeHandler={dispatchUser}
               actionType="CHANGE_AGE"
               value={user.age}/>

        <Button content="add"
                buttonType="submit"
                actionHandler={submitHandler}/>
    </form>
}


export {Form};