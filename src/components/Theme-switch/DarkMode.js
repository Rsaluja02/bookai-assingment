import React from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {
//attribute for dark theme
    const setDarkMode = () => {
        document.querySelector('body').setAttribute('data-theme','dark')
        localStorage.setItem('selectedTheme', 'dark')
    }

    //attribute for light theme
    const setLightMode = () => {
        document.querySelector('body').setAttribute('data-theme','light')
        localStorage.setItem('selectedTheme', 'light')
    }

    //default theme on startup check
    const selectedTheme = localStorage.getItem('selectedTheme');
    if(selectedTheme === 'dark'){
        setDarkMode();
    }else {setLightMode()}

//theme toggle
    const toggleTheme = (e) => {
        if(e.target.checked) 
            {setDarkMode()}
        else 
            {setLightMode()}
    }

    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
                defaultChecked={selectedTheme === 'dark' | 'light'}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
