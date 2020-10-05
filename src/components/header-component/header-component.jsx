import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import CartIcon from '../cart-icon/cart-icon.component';
import { connect} from 'react-redux';
import {ReactComponent as Logo} from './crown.svg';
import { auth} from '../../firebase/firebase.utils';
const Header = ({currentUser, hidden}) => (
    <div className='header' >
    <Link to='/' className='logo-container' >
    <Logo className='logo' />
    </Link>
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
    <CartIcon />
    </div>
    { hidden ? null : <CartDropdown />}
    </div>
)

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);