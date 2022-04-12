import React from 'react';

import styles from './Input.module.css';

interface Props {
    labelTag: string;
    inputType: 'text' | 'number';
    value: string | number;
    actionType: string;
    onChangeHandler: any;  //README.Q3
}

const Input = ({labelTag, inputType, value, onChangeHandler, actionType}: Props) => {

    return (
        <label className={styles.label_}>{labelTag}
            <input className={styles.input_}
                   type={inputType}
                   value={value}
                   onChange={e => onChangeHandler(({type: actionType, payload: e.target.value}))}/>
        </label>

    );
}

export {Input};