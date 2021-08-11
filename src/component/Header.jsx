import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import {auth} from '../firebase';

function Header() {

    const [{basket, user}, dispatch] = useStateValue();
    const handleAuthentication = ()=>{
        if(user){
            auth.signOut();
        }
    }
    return (
        <div className="header">
           <Link className='header_logoLink' to='/'>
             <img className='header_logo' 
               src="https://governmentjobswork.com/wp-content/uploads/2020/10/Amazon-Jobs.png"
               alt="" />
           </Link>
            <div className='header_search'>
                <input className='header_searchInput' type='text' />
                <SearchIcon className='header_searchIcon' />
            </div>
            <div className='header_nav_container'>

                <Link className='nav_link' to={!user && '/login'}>
                    <div onClick={handleAuthentication} className='nav_link_line'>
                        <span className='nav_link_lineOne'>
                          Hello {!user ? 'Guest' : user.email}
                        </span>
                        <span className='nav_link_lineTwo'>
                           {user ? 'sign out' : 'sign in'}
                        </span>
                    </div>
                </Link>

                <Link className='nav_link' to='/'>
                    <div className='nav_link_line'>
                        <span className='nav_link_lineOne'>
                          Your
                        </span>
                        <span className='nav_link_lineTwo'>
                            Prime
                        </span>
                    </div>
                </Link>

                <Link className='nav_link' to='/orders'>
                    <div className='nav_link_line'>
                        <span className='nav_link_lineOne'>
                          Returns
                        </span>
                        <span className='nav_link_lineTwo'>
                            & Order
                        </span>
                    </div>
                </Link>

                <Link className='nav_link' to='/checkout'>
                    <div className='nav_link_line basket'>
                       <ShoppingBasketIcon />
                        <span className='nav_link_lineTwo'>
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
