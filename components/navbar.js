import React from "react";

/* Importar los componentes */
import Logo from "./logo";
import SearchBar from "./search-bar";
import Login from "./login";

/* Importar los iconos */
import IconNav from "./iconNav";


export default function Navbar(props) {
  return <div className="navbar">
    <Logo logo={props.logo}/>
    <SearchBar />
    {props.items.map(ic => <IconNav iconUrl={ic.icon}/>) }
    <Login />
  </div>;
}
