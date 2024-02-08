import React, {useContext} from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/Context';
import { getAuth } from "firebase/auth";
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'


function Header() {
const {user} = useContext(AuthContext)
const navigate = useNavigate()
const {firebaseapp} = useContext(FirebaseContext)
const auth = getAuth();


  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span>{user ? `Welcome ${user.email}`: <Link to = "/login">Login</Link>}</span>
          <hr />
        </div>
        {user && <span onClick={()=>{
          firebaseapp.auth().signOut()
          navigate.push("/login")
        }} > Logout</span>}
            {/* const auth = getAuth();
            signOut(auth).then(() => {
                navigate('/login')
            }).catch((error) => {
              console.log(error);
            });
        }}>Logout</span>} */}

          
        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;