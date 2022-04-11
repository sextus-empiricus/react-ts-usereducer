import React from 'react';

interface Props {
    labelTag: string;
    inputType: 'string' | 'number';
    value: any,
    onChangeHandler: Function
}

export const Input = (props: Props) => {

    return (
        <label>props.labelTag:
            <input type={props.inputType}
                   value={props.value}
                   onChange={props.onChangeHandler}/>
        </label>

    );
}