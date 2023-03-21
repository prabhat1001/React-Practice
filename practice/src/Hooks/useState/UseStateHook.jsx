import React,{useState } from 'react'
import './useState.css'

const UseStateHook = () => {

    const [name, setName] = useState('Prabhat'); // used for string

    //lets used it for boolean
    const [flag, setFlag] = useState(true); // used for boolean

    //lets used it for numbers
    const [steps, setSteps] = useState(0); // used for numbers

    //lets used it for array
    const [names, setNames] = useState([]); // used for array ( initialized with empty array )
    

    function changeName() {
        setFlag(!flag);
        return setFlag;
    }

    function increment() {

        setSteps(steps + 1);  // => for increment by 1

        // for increment by 2 usng previous state 
        // setSteps((prevState) => prevState + 1);
        // setSteps((prevState) => prevState + 1);

        return setSteps;
    }

    function decrement() {

        if(steps > 0){  
            setSteps(steps - 1);    
        }
        else{
            setSteps(0);
        }

        return setSteps;    
    }



  return (
    <>

    <div className='exp1'>
        <p>Example - 1 (Name changer)</p>
        <h1 className='heading'>Hello! {flag ? name : 'Lakshya'} </h1>
        <div className='_button'>
            <button className='__button' onClick={changeName}> Click me!</button>
        </div>
    </div>

    <hr></hr>

    <div className='exp2'>
        <p>Example - 2 (Counter)</p>
        <div className='Steps'>
            <button className='btn2' onClick={increment}>+</button>
                <div className='Count'>{steps}</div>
            <button className='btn2' onClick={decrement}>-</button>
        </div>
    </div>

    <hr></hr>

    </>
  )
}



export default UseStateHook