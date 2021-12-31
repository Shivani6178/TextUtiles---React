import React from 'react'
import PropTypes from 'prop-types';
import { useState } from 'react'
export default function Navbar(props) {
    // const [modeValue, setmodeValue] = useState('');

    // const handleOnSelect = (eventkey) =>{
    //     console.log(eventkey);
    //     setmodeValue(eventkey);
    // }
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <a className={`navbar-brandtext text-${props.mode === 'light' ? 'dark' : 'light'}`} href="#">{props.text}</a>
            <buthrefn className="navbar-hrefggler" type="buthrefn" data-hrefggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="hrefggle navigation">
                <span className="navbar-hrefggler-icon"></span>
            </buthrefn>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auhref">
                    <li className="nav-item active text-decoration-none">
                        <a className={`nav-a mx-3 text-${props.mode === 'light' ? 'dark' : 'light'}`} href="#">Home</a>
                    </li>
                </ul>
            </div>
            <div className="form-check form-switch">
                <input className="form-check-input" onClick={props.handleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">Enable dark Mode</label>
            </div>

            {/* <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" onSelect={handleOnSelect} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Change Mode
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <span className="dropdown-item" eventkey="1">Dark Mode</span>
                    <span className="dropdown-item" eventkey="2">Light Mode</span>
                    <span className="dropdown-item" eventkey="3">Rainbow Mode</span>
                </div>
            </div> */}

        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string
}

