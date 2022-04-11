import {ErrorAction, ValidationError} from '../types/interface_ValidationError';

export const validationErrorReducer = (state: ValidationError, action: ErrorAction) => {
    switch (action.type) {
        case 'SET_SHOW':
            return {
                ...state, show: action.payload
            }
        case 'SET_MESSAGE':
            return {
                ...state, message: action.payload
            }
        default:
            return state
    }
}