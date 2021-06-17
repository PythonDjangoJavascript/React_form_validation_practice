import { useEffect, useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enterdName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)
  // const [formIsValid, setFormIsValid] = useState(false)



  const enteredNameIsValid = enterdName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  let formIsValid = false;
  if (enteredNameIsValid) {
    formIsValid = true;
  }

  // useEffect(() => {
  //   if (enteredNameIsValid) {
  //     setFormIsValid(true)
  //   } else {
  //     setFormIsValid(false)
  //   }
  // }, [enteredNameIsValid])


  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  }

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
    if (enterdName.trim() === '') {
      return;
    }
  }

  const formSubmissionHandelr = event => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return
    }

    console.log(enterdName);
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue)

    setEnteredName('')
    setEnteredNameTouched(false)
  }


  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmissionHandelr}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef}
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enterdName} />
        {nameInputIsInvalid && <p className="error-text">Name Must not be empty!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
