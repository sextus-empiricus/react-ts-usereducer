import React from 'react';
import styles from './Box.module.css';

interface Props {
    children: React.ReactNode;
}

export const Box = (props: Props) => {

    return <div className={styles.Box}>
        {props.children}
    </div>
}