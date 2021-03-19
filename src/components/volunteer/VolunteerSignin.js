import React, { Component } from 'react';
import ScriptTag from 'react-script-tag';


class VolunteerSignin extends Component {
   
    render() {
        return (
            <div id="signin-form-container">
            <iframe className="volunteer-signin-form"
        src="https://www.volgistics.com/ex2/vicnet.dll/?from=496230&amp;embedded=on" 
        frameBorder='0'
        sandbox
        style=
        
        {{height:"400px",
        
        width:"600px"}}
        >

        </iframe>
            </div>
        );
    }
}

export default VolunteerSignin;