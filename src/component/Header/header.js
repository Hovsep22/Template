import React from 'react';
import './header.css'
import logo1 from '../../images/logo1.png'
import logo2 from '../../images/logo2.png'
import switch1 from '../../images/switch1.png'
import elips from '../../images/elips.png'
import elips2 from '../../images/elips2.png'


const Header = () => {
 

    return (
        
        <header className='header'>
            <div className='hidercontainer'>
                <div className="one">
                    <div className='div-logo'>
                        <img src={logo1} alt='photo'/>
                        <img src={logo2} alt='photo' className='logo2'/>
                    </div>

                    <nav className='nav'>
                            <ul className='nav-ul'>
                                <li className='nav-li'>home</li>
                                <li  className='nav-li'>pricing</li>
                                <li  className='nav-li'>portfolio</li>
                            </ul>
                    </nav>
                </div>
                
                    <div className="two">
                        <div className='two-elips'>
                            <img src={elips}/>  
                            <img src={elips2}/>  
                        </div>

                        <div>
                            <img src={switch1}/>  
                        </div>
                       
                    </div>
            </div>

        </header>

    )
}

export default Header;


