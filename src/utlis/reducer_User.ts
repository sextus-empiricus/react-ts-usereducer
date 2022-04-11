import {User, UserActions} from '../types/interface_User';

export const userReducer = (state: User, action: UserActions) => {
    switch (action.type) {
        case 'CHANGE_NAME': {
            return {...state, name: action.payload}
        }
        case 'CHANGE_AGE': {
            return {...state, age: action.payload}
        }
        default:
            return state
    }
}