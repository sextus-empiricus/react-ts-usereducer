import React, {useReducer, useState} from 'react';
import {User} from '../types/interface_User';
import {dummyList} from '../utlis/dummyList';
import {Box} from '../components/Box';
import {Form} from '../components/Form';
import {List} from '../components/List/List';
import {ErrorBox} from '../components/ErrorBox';
import {validationErrorReducer} from '../utlis/reducer_ValidationError';
import {Container} from '../components/Container';

export const MainView = () => {
    const [usersList, setUsersList] = useState<User[]>(dummyList);
    const [validationError, dispatchValidationError] = useReducer(validationErrorReducer, {
        show: false,
        message: ''
    });

    return <>
        <Container>
            <Box>
                <Form setUsersList={setUsersList}
                      setValidationError={dispatchValidationError}/>
            </Box>

            <Box>
                <List usersList={usersList}
                      setUsersList={setUsersList}/>
            </Box>

            {
                validationError.show && <ErrorBox
                    setValidationError={dispatchValidationError}
                    validationErrorMessage={validationError.message}/>
            }
        </Container>
    </>
}