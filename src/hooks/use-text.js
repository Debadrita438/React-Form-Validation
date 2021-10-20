import { useState } from 'react';

const useText = (validation) => {
    const [input, setInput] = useState('');
    const [inputTouched, setInputTouched] = useState(false);

    const isValid = validation(input);

    const inputIsInvalid = !isValid && inputTouched;

    const inputChangeHandler = event => {
        setInput(event.target.value);
    }

    const inputBlurHandler = () => {
        setInputTouched(true);
    }

    const reset = () => {
        setInput('');
        setInputTouched(false)
    }

    return {
        value: input,
        isValid,
        hasError: inputIsInvalid,
        inputChangeHandler,
        inputBlurHandler,
        reset
    }
}

export default useText;