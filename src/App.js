import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Auth from "./pages/Auth/Auth";
import Events from "./pages/Even/Events";
import Faq from "./pages/Faq/Faq";
import Home from "./pages/Home/Home";
import Map from "./pages/Map/Map";
import Profile from "./pages/Profile/Profile";
import Registr from "./pages/Registr/Registr";
import Search from "./pages/Search/Search";

import "./styles/App.scss";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/events" element={<Events />} />
                <Route path="/search" element={<Search />} />
                <Route path="/map" element={<Map />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/registr" element={<Registr />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
