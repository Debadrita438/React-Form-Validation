import useText from '../hooks/use-text';

const BasicForm = () => {
    const {
        value: firstName,
        isValid: firstNameIsValid,
        hasError: firstNameInvalid,
        inputChangeHandler: firstNameChangeHandler,
        inputBlurHandler: firstNameBlurHandler,
        reset: resetFirstName
    } = useText(value => value.trim() !== '') 

    const {
        value: lastName,
        isValid: lastNameIsValid,
        hasError: lastNameInvalid,
        inputChangeHandler: lastNameChangeHandler,
        inputBlurHandler: lastNameBlurHandler,
        reset: resetLastName
    } = useText(value => value.trim() !== '')

    const {
        value: email,
        isValid: emailIsValid,
        hasError: emailInvalid,
        inputChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail
    } = useText(value => value.includes('@'))

    let formIsValid = false;
    
    if(firstNameIsValid && lastNameIsValid && emailIsValid) {
        formIsValid = true;
    }

    const submitHandler = event => {
        event.preventDefault();

        console.log(firstName);
        console.log(lastName);
        console.log(email);

        resetFirstName();
        resetLastName();
        resetEmail();
    }

    const firstNameInputClasses = firstNameInvalid ? 'form-control invalid' : 'form-control';
    const lastNameInputClasses = lastNameInvalid ? 'form-control invalid' : 'form-control';
    const emailInputClasses = emailInvalid ? 'form-control invalid' : 'form-control';

    return (
      <form onSubmit={submitHandler}>
            <div className='control-group'>
                <div className={firstNameInputClasses}>
                    <label htmlFor='firstname'>First Name</label>
                    <input 
                        type='text' 
                        id='firstname' 
                        value={firstName}
                        onChange={firstNameChangeHandler}
                        onBlur={firstNameBlurHandler}
                    />
                    {firstNameInvalid && <p className='error-text'>First name can't be empty</p>}
                </div>
                <div className={lastNameInputClasses}>
                    <label htmlFor='lastname'>Last Name</label>
                    <input 
                        type='text' 
                        id='lastname' 
                        value={lastName}
                        onChange={lastNameChangeHandler}
                        onBlur={lastNameBlurHandler}
                    />
                    {lastNameInvalid && <p className='error-text'>Last name can't be empty</p>}
                </div>
            </div>
            <div className={emailInputClasses}>
                <label htmlFor='email'>E-Mail Address</label>
                <input 
                    type='email' 
                    id='email'
                    value={email}
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler} 
                />
                {emailInvalid && <p className='error-text'>Please enter a valid email</p>}
            </div>
            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
      </form>
    );
};
  
export default BasicForm;
  