import React from 'react';
import './password.css'

const Password =()=>{
    return(
        <div className="passwordall">

            <p className='password-title'>Password Settings</p>

            <div className="password-title2">
                <p className="password-title2-factor">2 factor Authentication</p>
                <p className="password-title2-enable">Enable</p>
            </div>

            <div className="password-title3">
                <p className="password-title2-change">Change Password</p>
                <p className="password-title2-change2">Change your password or recover your current one</p>
            </div>

            <div className="password-input1">
                <p className="password-input1-text">Current password</p>
                <input className="password-input1-input" placeholder="......"/>
            </div>
            <div className="password-input2">
                <p className="password-input1-text2">New Password</p>
                <input className="password-input1-input" placeholder="......"/>
            </div>
            <div className="password-input2">
                <p className="password-input1-text3">Confirm Password</p>
                <input className="password-input1-input" placeholder="......"/>
            </div>

            <div className='password-all-button'>
                    <button className='password-button-save'>Save</button>
                    <button className='password-button-censel'>Cansel</button>
            </div>
        </div>
    )
}

export default Password
