import React,{useEffect, useState} from 'react';
import { db } from '../firebase';
import { useStateValue } from '../StateProvider';
import './Orders.css';
import Order from './Order';

function Orders() {
    const [{basket, user}, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        if(user){
            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created', 'desc')
            .onSnapshot((snapshot) =>
              setOrders(
                snapshot.docs.map((doc) => ({
                   id: doc.id,
                   data: doc.data(),
                })))
            );
        } else{
            setOrders([]);
        }   
    }, [user]);

console.log(orders);

    return (
        <div className="orders">
            <div className='orders_order'>
                { orders?.map((order) => (
                        <Order order={order} />
                    ))
                }
            </div>
        </div>
    );
}

export default Orders
