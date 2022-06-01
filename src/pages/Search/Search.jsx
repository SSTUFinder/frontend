import React from "react";
import Header from "../../components/UI/Header/Header";
import { useNavigate } from "react-router-dom";


import "./Search.scss";


function Search() {

    const navigate = useNavigate();


    return (
        <div className="search">
            <Header name="поиск"/>
            <input className="search-search" placeholder="поиск..." />
            <button className="search-btn" onClick={() => navigate("/map")}>найти!</button>
        </div>
    );
}

export default Search