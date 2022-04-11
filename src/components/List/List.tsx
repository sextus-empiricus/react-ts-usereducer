import React from 'react';
import {User} from '../../types/interface_User';
import {generateKey} from '../../utlis/generateKey';

import styles from './List.module.css';

interface Props {
    usersList: User[];
    setUsersList: Function;
}

const List = ({usersList, setUsersList}: Props) => {

    return <>
        {!usersList.length && <p className={styles['no-data']}>No users found</p>}

        <ul className={styles.list}>{usersList.map((el, index) =>
            <li className={styles['list-element']}
                key={generateKey(el.name)}
                onClick={() => setUsersList((prev: User[]) => [...prev].filter((el, i) => i !== index))}
            >{el.name} - {el.age}</li>)}
        </ul>
    </>
}

export {List};