import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from './crown.svg';
import { auth} from '../../firebase/firebase.utils';
const Header = ({currentUser}) => (
    <div className='header' >
    <Link to='/' className='logo-container' >
    <Logo className='logo' />
    </Link>
    <div className='options' >
    <div className='options' >
    <Link className='option' to='/shop' >
    SHOP
    </Link>
    <Link className='option' to='/contact' >
        CONTACT
    </Link>
    {
        currentUser ? <div className="option" onClick={()=> auth.signOut()} >SIGN OUT</div> : <Link className='option' to='/signIn' >Sign In</Link>
    }
    </div>
    </div>
    </div>
)

export default Header;