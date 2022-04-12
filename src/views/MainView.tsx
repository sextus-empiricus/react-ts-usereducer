import React, {useReducer, useState} from 'react';
import {User} from '../types/interface_User';
import {Box} from '../components/Box/Box';
import {Form} from '../components/Form/Form';
import {List} from '../components/List/List';
import {ErrorBox} from '../components/ErrorBox/ErrorBox';
import {validationErrorReducer} from '../utlis/reducer_ValidationError';
import {Container} from '../components/Container';
import {dummyList} from '../utlis/dummyList';

const MainView = () => {
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

export {MainView};