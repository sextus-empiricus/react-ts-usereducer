import React from 'react';
import {User} from '../../types/interface_User';
import {generateKey} from '../../utlis/generateKey';


interface Props {
    usersList: User[];
    setUsersList: Function;
}

const List = ({usersList, setUsersList}: Props) => {

    return <>
        <ul>{usersList.map((el, index) =>
            <li key={generateKey(el.name)}
                onClick={() => setUsersList((prev: User[]) => [...prev].filter((el, i) => i !== index))}
            >{el.name} - {el.age}</li>)}
        </ul>
    </>
}

export {List};