
import { useState } from "react";

const SimpleInput = (props) => {

//states
  const [enteredName, setEnteredName] = useState("");

  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);


  const enteredNameIsValid = enteredName.trim() !== "" && enteredNameIsTouched;  

  const nameInputIsInValid = !enteredNameIsValid && enteredNameIsTouched;

  const nameInputClasses = nameInputIsInValid
    ? "form-control invalid"
    : "form-control";

 

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);

  };

  const nameInputBlurHandler = () => {
    setEnteredNameIsTouched(true);

  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);

    

    setEnteredName("");


    setEnteredNameIsTouched(false);

  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>

        <input
          type="text" id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
          onBlur={nameInputBlurHandler}
        />

        {nameInputIsInValid && (
          <p className="error-text"> Your must enter something!! </p>
        )}
      </div>

      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
