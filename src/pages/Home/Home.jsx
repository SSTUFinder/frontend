import React, { useState, useContext, useEffect } from "react";
import Header from "../../components/UI/Header/Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoggedContext from "../../services/loggedContext";
import IdContext from "../../services/idContext";
import RoleContext from "../../services/roleContext";

import "./Home.scss";

import Search from "../../assets/index/search.svg";
import Event from "../../assets/index/event.svg";
import Map from "../../assets/index/map.svg";
import Profile from "../../assets/index/profile.svg";
import Reg from "../../assets/index/reg.svg";
import Auth from "../../assets/index/auth.svg";
import Quit from "../../assets/index/quit.svg";
import Faq from "../../assets/index/faq.svg";

function Home() {
    const navigate = useNavigate();
    const { isLogged, setIsLogged } = useContext(LoggedContext);
    const { userId, setUserId } = useContext(IdContext);
    const { userRole, setUserRole } = useContext(RoleContext);
    async function getTestData() {
        let url = "http://localhost:8080/test/data";
        let response = await axios.get(url);

        console.log(response);
    }

    useEffect(() => {
        getTestData();
    }, []);

    return (
        <div className="home">
            <Header name="Главная" />
            {isLogged === false ? (
                <div className="home-menu">
                    <div className="home-item" onClick={() => navigate("/faq")}>
                        <img src={Faq} alt="faq" />
                        <p>Справка</p>
                    </div>
                    <div
                        className="home-item"
                        onClick={() => navigate("/registr")}
                    >
                        <img src={Reg} alt="reg" />
                        <p>Регистрация</p>
                    </div>
                    <div
                        className="home-item"
                        onClick={() => {
                            setIsLogged(true);
                            navigate("/auth");
                        }}
                    >
                        <img src={Auth} alt="auth" />
                        <p>Авторизация</p>
                    </div>
                </div>
            ) : (
                <div className="home-menu">
                    <div
                        className="home-item"
                        onClick={() => navigate("/search")}
                    >
                        <img src={Search} alt="search" />
                        <p>Поиск</p>
                    </div>
                    <div
                        className="home-item"
                        onClick={() => navigate("/events")}
                    >
                        <img src={Event} alt="events" />
                        <p>Мероприятия</p>
                    </div>
                    <div className="home-item" onClick={() => navigate("/map")}>
                        <img src={Map} alt="maps" />
                        <p>Карта</p>
                    </div>
                    <div className="home-item" onClick={() => navigate("/faq")}>
                        <img src={Faq} alt="faq" />
                        <p>Справка</p>
                    </div>
                    <div
                        className="home-item"
                        onClick={() => navigate("/profile")}
                    >
                        <img src={Profile} alt="profile" />
                        <p>Профиль</p>
                    </div>
                    <div
                        className="home-item"
                        onClick={() => {
                            setIsLogged(false);
                            setUserId(null);
                        }}
                    >
                        <img src={Quit} alt="quit" />
                        <p>Выйти</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;
