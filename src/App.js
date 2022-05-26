import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Events from "./pages/Even/Events";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import "./styles/App.scss";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/events" element={<Events />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
