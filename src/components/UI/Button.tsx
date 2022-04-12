import React from 'react';

import styles from './Button.module.css';

interface Props {
    content: string
    buttonType: 'button' | 'submit' | 'reset';
    actionHandler: any; //README.Q3
}

const Button = ({buttonType, content, actionHandler}: Props) => {

    return (
        <button className={styles.button}
                type={buttonType}
                onClick={actionHandler}
        >{content}
        </button>)
}
export {Button};