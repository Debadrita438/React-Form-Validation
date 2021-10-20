import { useState } from 'react';

const useInput = (validateValue) => {
    const [input, setInput] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const isValid = validateValue(input);
    const hasError = !isValid && isTouched;

    const inputChangeHandler = event => {
        setInput(event.target.value);
    }

    const inputBlurHandler = () => {
        setIsTouched(true);
    }

    const reset = () => {
        setInput('');
        setIsTouched(false)
    }

    return {
        value: input,
        isValid,
        hasError,
        inputChangeHandler,
        inputBlurHandler,
        reset
    }
}

export default useInput