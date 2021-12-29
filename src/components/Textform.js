import React from 'react'
import {useState} from 'react'

export default function Textform(props) {
    const ChangeUpperCase=()=>{
        console.log("Button has been clicked!!");
        let newText =text.toUpperCase();
        setinput(newText);
    }

    const ChangeLowerCase = () =>{
        let newText = text.toLowerCase();
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
            <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Enter text here</h1>
            <div className="form-group">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="textarea" rows="3"></textarea>
                <div className="container my-3">
                <button type="button" className="btn btn-primary" onClick={ChangeUpperCase}>Convert to upperCase</button>
                <button type="button" className="btn btn-primary mx-3" onClick={ChangeLowerCase}>Convert to LowerCase</button>  
                <button type="reset" className="btn btn-primary" onClick={clearTextArea}>Reset</button>  
                </div>
            </div>
        </div>
        <div className={`textSummary container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <h2>Your text summary</h2>
            <p>{text.split(' ').length} words {text.length} and  characters</p>
            <h2>Preview your text</h2>
            <p>{text}</p>
        </div>
        
        </>
    )
}

