import { useReducer } from 'react';

const initialState = {
    input: '',
    isTouched: false
}

const inputStateReducer = (state, action) => {
    switch(action.type) {
        case 'INPUT':
            return {
                input: action.payload,
                isTouched: state.isTouched
            }
        case 'BLUR':
            return {
                ...state,
                isTouched: true
            }
        case 'RESET':
            return initialState;
        default:
            return state;
    }
}

const useInput = (validateValue) => {
    const [inputState, dispatchInputAction] = useReducer(inputStateReducer, initialState);

    const isValid = validateValue(inputState.input);
    const hasError = !isValid && inputState.isTouched;

    const inputChangeHandler = event => {
        dispatchInputAction({
            type: 'INPUT',
            payload: event.target.value
        })
    }

    const inputBlurHandler = () => {
        dispatchInputAction({ type: 'BLUR' })
    }

    const reset = () => {
        dispatchInputAction({ type: 'RESET' })
    }

    return {
        value: inputState.input,
        isValid,
        hasError,
        inputChangeHandler,
        inputBlurHandler,
        reset
    }
}

export default useInput