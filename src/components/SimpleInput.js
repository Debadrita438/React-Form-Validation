import useInput from '../hooks/use-input';

const SimpleInput = () => {
    const {
        value: nameInput, 
        hasError: nameHasError,
        isValid: nameIsValid, 
        inputChangeHandler: nameInputChangeHandler,
        inputBlurHandler: nameInputBlurHandler,
        reset: resetNameInput
    } = useInput(value => value.trim() !== '');

    const {
        value: emailInput,
        hasError: emailHasError,
        isValid: emailIsValid,
        inputChangeHandler: emailInputChangeHandler,
        inputBlurHandler: emailInputBlurHandler,
        reset: resetEmailInput
    } = useInput(value => value.includes('@'));

    let formIsValid = false;

    if(nameIsValid && emailIsValid) {
        formIsValid = true;
    }

    const submitHandler = event => {
        event.preventDefault();

        if(!formIsValid) {
            return;
        }
        console.log(nameInput);
        console.log(emailInput);
        
        resetNameInput();
        resetEmailInput();
    }

    const nameInputClasses = !nameHasError ? 'form-control' : 'form-control invalid';
    const emailInputClasses = !emailHasError ? 'form-control' : 'form-control invalid';

    return (
      <form onSubmit={submitHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input 
                    type='text' 
                    id='name' 
                    onChange={nameInputChangeHandler} 
                    onBlur={nameInputBlurHandler}
                    value={nameInput} 
                />
                {nameHasError && <p className='error-text'>Name must not be Invalid</p>}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor='email'>Your Email</label>
                <input 
                    type='email' 
                    id='email' 
                    onChange={emailInputChangeHandler} 
                    onBlur={emailInputBlurHandler}
                    value={emailInput} 
                />
                {emailHasError && <p className='error-text'>Email must not be Invalid</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
      </form>
    );
};
  
export default SimpleInput;
  