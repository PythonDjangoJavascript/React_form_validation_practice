import { useRef } from "react";

import useInput from "../hooks/juse-input";

const SimpleInput = () => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangedHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHander,
    reset: resetNameInput
  } = useInput((value) => value.trim() !== ''); // it will be execute inside custom hook

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangedHandler: EmailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput((value) => value.includes('@'));


  const nameInputRef = useRef();
  // const [enterdName, setEnteredName] = useState('');
  // const [enteredNameTouched, setEnteredNameTouched] = useState(false)
  // const [formIsValid, setFormIsValid] = useState(false)



  // const enteredNameIsValid = enterdName.trim() !== '';
  // const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  // useEffect(() => {
  //   if (enteredNameIsValid) {
  //     setFormIsValid(true)
  //   } else {
  //     setFormIsValid(false)
  //   }
  // }, [enteredNameIsValid])


  // const nameInputChangeHandler = event => {
  //   setEnteredName(event.target.value);
  // }

  // const nameInputBlurHandler = () => {
  //   setEnteredNameTouched(true);
  //   if (enterdName.trim() === '') {
  //     return;
  //   }
  // }

  const formSubmissionHandelr = event => {
    event.preventDefault();

    // setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return
    }

    // console.log(enterdName);
    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue)

    // setEnteredName('')
    // setEnteredNameTouched(false)
    resetNameInput()
    resetEmailInput()
  }


  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control'
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmissionHandelr}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef}
          type='text'
          id='name'
          onChange={nameChangedHandler}
          onBlur={nameBlurHander}
          value={enteredName} />
        {nameInputHasError && <p className="error-text">Name Must not be empty!</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          id='name'
          onChange={EmailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail} />
        {emailInputHasError && <p className="error-text">Please Enter a valid Emial!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
