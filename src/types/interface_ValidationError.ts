export interface ValidationError {
    show: boolean,
    message: string
}

interface ShowErrorAction {
    type: 'SET_SHOW';
    payload: boolean
}

interface SetErrorMessageAction {
    type: 'SET_MESSAGE';
    payload: string
}

export type ErrorAction = SetErrorMessageAction | ShowErrorAction;