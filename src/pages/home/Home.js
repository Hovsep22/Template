import React from 'react';
import './home.css';
import photo1 from '../../images/michel.png';
import icon1 from '../../images/icon1.png'
import icon2 from '../../images/icon2.png'
import icon3 from '../../images/icon3.png'
import icon4 from '../../images/icon4.png'
import icon5 from '../../images/icon5.png'
import icon6 from '../../images/icon6.png'
import icons from '../../images/icons.svg'
import icon11 from '../../images/icon11.png'
import sequrity from '../../images/sequrity.png'
import payment from '../../images/payment.png'
import help from '../../images/help.png'
import { NavLink } from 'react-router-dom';

const Home = ()=> {
    return(
        <div className="all">
            <div className="first">
                <h6>Dennis Holland</h6>
                    <div className='profile-photo-div'>
                        <div className='profile-photo'>
                            <img src={photo1} alt='photo' /> 
                        </div>                    
                        <p className="profile-name">EDIT</p>
                    </div>
                 <div className="all2">
                    <div className="div1">
                        <div className="profile-div1">
                                
                                <NavLink  to="/account" className={({isActive}) => isActive ? 'link-acount-active': 'link-acount'}>
                                <img src={icon11} alt='photo' className="icon" />
                                <p className='profile-div1-txt'> Account </p>
                                </NavLink>
            
                        </div>
                        <div className="profile-div1">
                        <NavLink  to="/password" className={({isActive}) => isActive ? 'link-acount-active': 'link-acount'}>
                                <img src={icon1} alt='photo' className="icon" />
                                <p className='profile-div1-txt'> Password </p>
                                </NavLink>
                        </div>
                        <div className="profile-div1">
                                <NavLink  to="/security" className={({isActive}) => isActive ? 'link-acount-active': 'link-acount'}>
                                <img src={sequrity} alt='photo' className="icon" />
                                <p className='profile-div1-txt'> Security </p>
                                </NavLink>
                        </div>
                        <div className="profile-div1">
                                <NavLink  to="/application" className={({isActive}) => isActive ? 'link-acount-active': 'link-acount'}>
                                <img src={icon2} alt='photo' className="icon" />
                                <p className='profile-div1-txt'> Application </p>
                                </NavLink>
                        </div>
                        <div className="profile-div1">
                        <NavLink  to="/notification" className={({isActive}) => isActive ? 'link-acount-active': 'link-acount'}>
                                <img src={icon4} alt='photo' className="icon" />
                                <p className='profile-div1-txt'> Notification </p>
                                </NavLink>
                        </div>
                        <div className="profile-div1">
                        <NavLink  to="/paymentmethods" className={({isActive}) => isActive ? 'link-acount-active': 'link-acount'}>
                                <img src={payment} alt='photo' className="icon" />
                                <p className='profile-div1-txt'> Payment Methods </p>
                                </NavLink>
                        </div>
                        <div className="profile-div1">
                        <NavLink  to="/help" className={({isActive}) => isActive ? 'link-acount-active': 'link-acount'}>
                                <img src={help} alt='photo' className="icon" />
                                <p className='profile-div1-txt'> Help </p>
                                </NavLink>
                        </div>
                    </div>

                        <div className="div2">
                            <div className='button-profile'>
                                <button>Upgrade to PRO </button>
                            </div>
                        </div>
                 </div>

                  
            </div>






            {/* <div className="second">  
                <Account/>
                
            </div> */}


        </div>
    )
}


export default Home;