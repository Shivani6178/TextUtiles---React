import React from 'react'
import {useState} from 'react'

export default function Textform() {
    const ChangeUpperCase=()=>{
        console.log("Button has been clicked!!");
        let newText =text.toUpperCase();
        setinput(newText);
    }

    const handleOnChange = (event) =>{
        setinput(event.target.value)
    }

    const clearTextArea =() =>{
        setinput('');
    }

    const [text, setinput] = useState('');
    return (
        <>
        <div className="container">
            <h1>Enter text here</h1>
            <div className="form-group">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="textarea" rows="3"></textarea>
                <div className="container my-3">
                <button type="button" className="btn btn-primary" onClick={ChangeUpperCase}>Convert to upperCase</button>  
                <button type="reset" className="btn btn-primary mx-3" onClick={clearTextArea}>Reset</button>  
                </div>
            </div>
        </div>
        <div className="textSummary container">
            <h2>Your text summary</h2>
            <p>{text.split(' ').length} words {text.length} and  characters</p>
        </div>
        </>
    )
}

