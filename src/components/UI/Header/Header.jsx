import React from "react";
import { useNavigate } from "react-router-dom";

import "./Header.scss";


const Header = (props) => {
    const navigate = useNavigate();
    function NavigateTo() {
        navigate("/" );
    }

    return (
        <div className="header">
            <h1 className="header-h" onClick={NavigateTo}>SSTU.Finder</h1>
            <p className="header-sub">{props.name}</p>
        </div>
    );
}

export default Header;
