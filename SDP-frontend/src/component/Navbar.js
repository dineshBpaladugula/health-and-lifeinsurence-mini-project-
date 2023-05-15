import React ,{ useState } from 'react'
import {Link} from 'react-router-dom'
import {RiHomeHeartLine} from 'react-icons/ri'
import {CgMenuGridR,CgTime} from 'react-icons/cg'
import { Button } from './Button'
import './Navbar.css'
import {IconContext} from 'react-icons/lib'
import {MdOutlinePolicy} from 'react-icons/md'
import {FiActivity} from 'react-icons/fi'
import {GiPayMoney} from 'react-icons/gi'

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    const showButton =()=>{
        if(window.innerWidth <=960){
            setButton(false)
        }
        else{
            setButton(true)
        }
    }
    window.addEventListener("resize",showButton)
    return (
        <>
        <IconContext.Provider value={{color:"#fff"}}>
            <div className="navbar">
            <div className="navbar-container container">
                <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                    <FiActivity className="navbar-icon"/>
                    Insurance
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                {click ? <CgTime /> : <CgMenuGridR/>}
                </div>
                <ul className={click ? 'nav-menu active': 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/' className='nav-links'onClick={closeMobileMenu}>
                        <RiHomeHeartLine className="navbar-icon"/>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/about' className='nav-links'onClick={closeMobileMenu}>
                            <MdOutlinePolicy className="navbar-icon"/>
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/plan' className='nav-links'onClick={closeMobileMenu}>
                        <GiPayMoney className="navbar-icon"/>
                           Plan
                        </Link>
                    </li>
                    <li className='nav-btn'>
                       {button ? (
                           <Link to='/login' className='btn-link'>
                               <Button buttonStyle="btn--outline">LOGIN</Button>
                           </Link>
                       ) : (
                           <Link to='/login' className='btn-link'>
                               <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                                 LOGIN
                               </Button>
                           </Link>
                       )}
                    </li>

                </ul>
  
            </div>
            

        </div>
        </IconContext.Provider> 
        </>
     
    )
}

export default Navbar
