export interface User {
    name: string;
    age: number;
}

interface ChangeUserNameAction {
    type: 'CHANGE_NAME',
    payload: string
}

interface ChangeUserAgeAction {
    type: 'CHANGE_AGE',
    payload: number
}

export type UserActions = ChangeUserNameAction | ChangeUserAgeAction