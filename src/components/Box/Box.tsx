import React from 'react';
import styles from './Box.module.css';

interface Props {
    children: React.ReactNode;
}

const Box = ({children}: Props) => {

    return (
        <div className={styles.Box}>
            {children}
        </div>
    )
}

export {Box};