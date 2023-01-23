import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <img src="https://www.adobe.com/express/create/media_1fd4a6f2e688c9c269ec460ca1095e89953e33c28.png?width=750&format=png&optimize=medium" alt="logo"/>
    </header>
  );
 
}

export default Header;