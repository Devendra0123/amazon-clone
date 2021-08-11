import React, { useEffect } from 'react';
import './App.css';
import Header from './component/Header';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './component/Home';
import Checkout from './component/Checkout';
import Login from './component/Login';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './component/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './component/Orders';

const promise = loadStripe('pk_test_51JFugjI2EOuqUaH552kaIdqDA8G1WTiowDR7BRGuUSZxH7LPXk2dEF0npNxoFEzXVTV9pMHNkLBN5vnqCZbT2Euq00dcSSWYyb');

function App() {
    const [{}, dispatch] = useStateValue();
    useEffect(() => {
       auth.onAuthStateChanged(authUser =>{
           console.log("user id >>>", authUser);
           if(authUser){
             dispatch({
                 type: 'SET_USER',
                 user: authUser
             })
           }else{
              dispatch({
                  type: 'SET_USER',
                  user: null
              })
           }
       })
    }, [])

    return (
        <Router>
          <div className="app">
            <Switch>
               
               <Route path='/orders'>
                    <Header />
                    <Orders />
               </Route>

               <Route path='/login'>
                   <Login />
               </Route>

               <Route path='/checkout'>  
                   <Header />
                   <Checkout />
               </Route>

               <Route path='/payment'>
                   <Header />
                   <Elements stripe={promise} >
                      <Payment />
                   </Elements>   
               </Route>

               <Route path='/'>
                   <Header />
                   <Home />
               </Route>

            </Switch> 
          </div>
        </Router> 
    )
}

export default App
