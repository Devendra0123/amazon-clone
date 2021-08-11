import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';
import './Login.css';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const signIn = (e)=>{
         e.preventDefault();
         auth.signInWithEmailAndPassword(email, password)
         .then(auth => {
             history.push('/')
         })
         .catch(error=> alert(error.message))
    }

    const register = (e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            if(auth){
                history.push('/')
            }
        })
        .catch(error=> alert(error.message))
    }
    return (
        <div className="login">
            <Link className='header_logoLink' to='/'>
             <div className="navbar_logo">
                <h1>D</h1>
             </div>
            </Link>

            <div className='login_container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input 
                     onChange={e=> setEmail(e.target.value)}
                     type='text'
                     value={email} />

                    <h5>Password</h5>
                    <input
                     onChange={e=> setPassword(e.target.value)}
                     type='password'
                     value={password} />

                    <button 
                      onClick={signIn}
                      type='submit'
                      className='login_signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to Deven's condition of use and sale.Please see our Privacy Notice, our Cookies Notice and our interested based Ads Notice.
                </p>

                <button 
                  onClick={register}
                  className='login_registerButton'>Create your Deven Account</button>
            </div>
        </div>
    )
}

export default Login
