import React from 'react';
import styles from './ErrorBox.module.css';
import {Button} from '../UI/Button';

interface Props {
    setValidationError: any; //README.Q1
    validationErrorMessage: string;
}

const ErrorBox = ({setValidationError, validationErrorMessage}: Props) => {

    return <>
        <div className={styles.shadow}>
            <div className={styles.wrapper}>
                <div className={styles.box}>
                    <h1 className={styles.title}>🙈</h1>
                    <p className={styles.info}>{validationErrorMessage}</p>
                    <Button content="OK"
                            buttonType="button"
                            actionHandler={() => setValidationError({type: 'SET_SHOW', payload: false})}/>
                </div>
            </div>
        </div>
    </>
}

export {ErrorBox};