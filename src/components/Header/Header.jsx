import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src="https://www.adobe.com/express/create/media_1fd4a6f2e688c9c269ec460ca1095e89953e33c28.png?width=750&format=png&optimize=medium" alt="logo"/>
      <div className={s.loginBlock}>
        { props.isAuth ? props.login
        : <NavLink to={'/login'} >Login</NavLink>
        }
      </div>
    </header>
  );
 
}

export default Header;