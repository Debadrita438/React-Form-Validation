import { useState } from 'react';

const BasicForm = () => {
    const [firstName, setFirstName] = useState('');
    const [firstNameTouched, setFirstNameTouched] = useState(false);

    const [lastName, setLastName] = useState('');
    const [lastNameTouched, setLastNameTouched] = useState(false);

    const [email, setEmail] = useState('');
    const [emailTouched, setEmailTouched] = useState(false);

    const firstNameIsValid = firstName.trim() !== '';
    const lastNameIsValid = lastName.trim() !== '';
    const emailIsValid = email.includes('@');

    const firstNameInvalid = !firstNameIsValid && firstNameTouched;
    const lastNameInvalid = !lastNameIsValid && lastNameTouched;
    const emailInvalid = !emailIsValid && emailTouched;

    let formIsValid = false;
    
    if(firstNameIsValid && lastNameIsValid && emailIsValid) {
        formIsValid = true;
    }

    const firstNameChangeHandler = event => {
        setFirstName(event.target.value);
    }

    const firstNameBlurHandler = () => {
        setFirstNameTouched(true);
    }

    const lastNameChangeHandler = event => {
        setLastName(event.target.value);
    }

    const lastNameBlurHandler = () => {
        setLastNameTouched(true);
    }

    const emailChangeHandler = event => {
        setEmail(event.target.value)
    }

    const emailBlurHandler = () => {
        setEmailTouched(true);
    }

    const submitHandler = event => {
        event.preventDefault();

        console.log(firstName);
        console.log(lastName);
        console.log(email);

        setFirstName('');
        setLastName('');
        setEmail('');

        setFirstNameTouched(false);
        setLastNameTouched(false);
        setEmailTouched(false);
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
  