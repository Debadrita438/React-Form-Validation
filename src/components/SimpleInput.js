import { useState } from 'react';

const SimpleInput = () => {
    const [input, setInput] = useState('');
    const [nameTouched, setNameTouched] = useState(false);

    const isValid = input.trim() !== '';
    const nameInputIsInvalid = !isValid && nameTouched;

    const inputChangeHandler = event => {
        setInput(event.target.value);
    }

    const inputBlurHandler = () => {
        setNameTouched(true);
    }

    const submitHandler = event => {
        event.preventDefault();

        setNameTouched(true);

        if(!isValid) {
            return;
        }
        console.log(input);
        setInput('');
        setNameTouched(false)
    }

    const nameInputClasses = !nameInputIsInvalid ? 'form-control' : 'form-control invalid';

    return (
      <form onSubmit={submitHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input 
                    type='text' 
                    id='name' 
                    onChange={inputChangeHandler} 
                    onBlur={inputBlurHandler}
                    value={input} 
                />
                {nameInputIsInvalid && <p className='error-text'>Name must not be valid</p>}
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
      </form>
    );
};
  
export default SimpleInput;
  