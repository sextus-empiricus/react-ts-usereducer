import React from 'react';

import styles from './Input.module.css';

interface Props {
    labelTag: string;
    inputType: 'text' | 'number';
    value: string | number;
    actionType: string;
    onChangeHandler: Function;  // <= what's better?
}

const Input = (props: Props) => {

    return (
        <label className={styles.label_}>{props.labelTag}
            <input className={styles.input_}
                   type={props.inputType}
                   value={props.value}
                   onChange={e => props.onChangeHandler(({type: props.actionType, payload: e.target.value}))}/>
        </label>

    );
}

export {Input};