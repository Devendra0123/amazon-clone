import React from 'react';
import { useStateValue } from '../StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {

    const [{basket, user}, dispatch] = useStateValue();
    
    return (
        <div className="checkout">
            <div className='checkout_left'>
              <img 
               className='checkout_ad'
               src='https://forthemommas.com/wp-content/uploads/2019/07/f3vx-606-FreshUS_UCO1TCG_skip_TCG_1500x415._CB463922728_.jpg' 
               alt='' /> 
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className='checkout_title'>
                        Your shopping Basket
                    </h2>
                    {basket.map(item=>(
                       <CheckoutProduct
                         id={item.id}
                         title={item.title}
                         image={item.image}
                         price={item.price}
                         rating={item.rating} /> 
                    ))}
                </div>
            </div>

            <div className='checkout_right'>
               <Subtotal /> 
            </div>
        </div>
    )
}

export default Checkout
