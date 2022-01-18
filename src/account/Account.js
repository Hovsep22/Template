import React from 'react';
import './account.css';
import vector from '../../src/images/vector.png'
import elips from '../images/elips.png'

const Account =()=>{
    return(
            <form className="accountall" onSubmit={(e)=>{
                e.preventDefault();
            }}>
                <div className='account-title-div'>
                <span className='account-title'>Account Settings</span>
                </div>
                <div className="accountone">
                    <div className='account-all-input-div'>
                        <label htmlFor="firstName">First Name</label>
                        <div className="inp1">
                            <input placeholder="Dennis" className='accountall-input' id='firstName'/>
                            <div className='account-all-img'><img src={vector}/></div>
                        </div>
                    </div>
                    <div className='account-all-input-div'>
                        <label htmlFor="lastName">Last Name</label>
                        <div className="inp1">
                            <input placeholder="Holland" className='accountall-input' id='lastName'/>
                            <div className='account-all-img'><img src={vector}/></div>
                        </div>
                    </div>
                </div>
                <div className="accounttwo">
                <div className='account-all-input-div'>
                        <label htmlFor="email">Email</label>
                        <div className="inp1">
                            <input placeholder="dennisholland@gmail.com" className='accountall-input' id='email'/>
                            <div className='account-all-img'><img src={vector}/></div>
                        </div>
                    </div>
                    <div className='account-all-input-div'>
                        <label htmlFor="phoneNumber">Phone number</label>
                        <div className="inp1">
                           <input placeholder="+398 " className='accountall-input' id='phoneNumber'/>
                            <div className='account-all-img'><img src={vector}/></div>
                        </div>
                    </div>
                </div>
                <div className='account-all-button'>
                    <button className='acoount-button-save'>Save</button>
                    <button className='account-button-censel'>Cansel</button>
                </div>
            </form>
    )
}

export default Account
