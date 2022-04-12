import React from 'react';
import styles from './Container.module.css'

interface Props {
    children: React.ReactNode;
}

const Container = ({children}: Props) => {

    return <div className={styles.container}>
        {children}
    </div>
}

export {Container};