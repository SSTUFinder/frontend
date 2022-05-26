import React from "react";
import Header from "../../components/UI/Header/Header";

import "./Search.scss";


function Search() {
    return (
        <div className="search">
            <Header name="поиск"/>
            <input className="search-search" placeholder="поиск..." />
        </div>
    );
}

export default Search