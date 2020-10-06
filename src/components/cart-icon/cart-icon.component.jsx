import React from 'react';
import './cart-icon.styles.scss';
import {connect} from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import {ReactComponent as ShoppingIcon} from '../header-component/shopping-bag.svg';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden} >
    <ShoppingIcon className="shopping-icon" />
    <span className='item-count' >{itemCount}</span>
    </div>
)

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);