import {useState} from 'react'

const useInput = (checkFunction) => {
  const [enteredValue,setEnteredValue] = useState('');
  const [isTouched,setIsTouched] = useState(false);


  const validateValue = checkFunction(enteredValue);
  const hasError = !validateValue && isTouched;
  
  const valueChangeHandler = (event)=>{
    setEnteredValue(event.target.value)
  }
  
  const inputIsTouched = ()=>{
    setIsTouched(true)
  }
  


  return {
    value:enteredValue,
    isValid:validateValue,
    hasError,
    valueChangeHandler,
    inputIsTouched
  }
  
  
  
  
  
}

export default useInput
