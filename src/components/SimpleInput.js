import { useEffect, useRef, useState } from 'react';

const SimpleInput = () => {
    // const nameInputRef = useRef();
    const [input, setInput] = useState('');

    // Showing error even before user started writing anything
    // const [isValid, setIsValid] = useState(false);

    // Showing error after clicking the submit button but input is valid even when the field is null
    // const [isValid, setIsValid] = useState(true);

    const [isValid, setIsValid] = useState(false);
    const [nameTouched, setNameTouched] = useState(false);

    useEffect(() => {
        if(isValid) {
            console.log('Name is valid')
        }
    }, [isValid])

    // Evaluating on every keystroke
    const inputChangeHandler = event => {
        setInput(event.target.value);
        if(event.target.value.trim() !== '') {
            setIsValid(true);
        }
    }

    // When loses focus then to show error is the field is empty
    const inputBlurHandler = () => {
        setNameTouched(true)
        if(input.trim() === '') {
            setIsValid(false);
        }
    }

    const submitHandler = event => {
        event.preventDefault();

        setNameTouched(true);

        if(input.trim() === '') {
            setIsValid(false);
            return
        }
        setIsValid(true)
        console.log(input);
        setInput('');

        // Using ref
        // const enteredName = nameInputRef.current.value;
        // console.log(enteredName)
    }

    const nameInputIsInvalid = !isValid && nameTouched;

    const nameInputClasses = !nameInputIsInvalid ? 'form-control' : 'form-control invalid';

    return (
      <form onSubmit={submitHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input 
                    // ref={nameInputRef} 
                    type='text' 
                    id='name' 
                    onChange={inputChangeHandler} 
                    onBlur={inputBlurHandler}
                    value={input} 
                />
                {/* Validation happening after clicking submit button */}
                {nameInputIsInvalid && <p className='error-text'>Name must not be valid</p>}
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
      </form>
    );
};
  
export default SimpleInput;
  