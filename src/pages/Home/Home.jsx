import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../../components/UI/Header/Header";


function Home() {
    return (
        <div className="home">
            <Header />
        </div>
    );
}

export default Home;
