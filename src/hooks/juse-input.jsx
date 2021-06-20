import { useReducer } from "react";



const initialInputStae = {
    value: '',
    isTouched: false
}
// Just to practice UseReducer.... 
const inputStateReducer = (state, action) => {
    if (action.type === "INPUT") {
        console.log("INPUT")
        return {
            value: action.value,
            isTouched: state.isTouched
        }
    } else if (action.type === "BLUR") {
        console.log("BLUR")
        return {
            value: state.value,
            isTouched: true
        }
    } else if (action.type === "RESET") {
        console.log("Reset")
        return {
            value: '',
            isTouched: false
        }
    } else {
        return {
            value: state.value,
            isTouched: state.isTouched
        }
    }

}

const useInput = (validateValue) => {

    // const [enteredValue, setEnteredValue] = useState('');
    // const [isTouched, setIsTouched] = useState(false)
    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputStae)


    // const valueIsValid = validateValue(enteredValue);
    // const hasError = !valueIsValid && isTouched;
    const valueIsValid = validateValue(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;


    const valueChangedHandler = event => {
        dispatch({
            type: 'INPUT',
            value: event.target.value
        })
        // setEnteredValue(event.target.value);
    }

    const inputBlurHandler = () => {
        // setIsTouched(true);
        // if (enteredValue.trim() === '') {
        //     return;
        // }

        dispatch({
            type: "BLUR"
        })
    }

    const reset = () => {
        // setEnteredValue('');
        // setIsTouched(false)
        dispatch({ type: "RESET" })
    }

    return {
        // value: enteredValue,
        value: inputState.value,
        isValid: valueIsValid,
        hasError,
        valueChangedHandler,
        inputBlurHandler,
        reset
    }
};

export default useInput