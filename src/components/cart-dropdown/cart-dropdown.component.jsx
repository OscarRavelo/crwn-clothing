import React from "react";
import { connect } from 'react-redux';
import "./cart-dropdown.styles.scss";
import {selectCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from "../custom-button/custom-button.component";
import { withRouter } from 'react-router-dom'


const CartDropdown = ({cartItems, history}) => (
    <div className="cart-dropdown " >
        <div className="cart-items" >
        {
            cartItems.length ?
           cartItems.map(cartItem => (
               <CartItem key={cartItem.id} item={cartItem} ></CartItem>
           )) 
           : 
           <span className='empty-message'>your cart is empty</span>
        }
        </div>
            <CustomButton onClick={() => history.push('/checkout') } >GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));