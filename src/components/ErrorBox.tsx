import React from 'react';
import styles from './ErrorBox.module.css';

interface Props {
    setValidationError: any;
    validationErrorMessage: string
}

export const ErrorBox = (props: Props) => {

    return <>
        <div className={styles.shadow}>
            <div className={styles.box}>
                <h1>Sorry</h1>
                <h2>{props.validationErrorMessage}</h2>
                <button onClick={() => props.setValidationError({type: 'SET_SHOW', payload: false})}>ok</button>
            </div>
        </div>
    </>
}