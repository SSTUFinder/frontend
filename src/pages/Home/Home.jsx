import React  from "react";
import Header from "../../components/UI/Header/Header";
import { useNavigate } from "react-router-dom";

import "./Home.scss"

import Search from "../../assets/index/search.svg"
import Event from "../../assets/index/event.svg"
import Map from "../../assets/index/map.svg"
import Profile from "../../assets/index/profile.svg"
import Reg from "../../assets/index/reg.svg"
import Auth from "../../assets/index/auth.svg"
import Quit from "../../assets/index/quit.svg"
import Faq from "../../assets/index/faq.svg"

function Home() {

    const navigate = useNavigate();
    function NavToEvent() {
        navigate("/events");
    }
    function NavToSearch() {
        navigate("/search")
    }

    return (
        <div className="home">
            <Header name="Главная"/>

            <div className="home-menu">
                <div className="home-item" onClick={NavToSearch}>
                    <img src={Search} alt="search" />
                    <p>Поиск</p>
                </div>
                <div className="home-item" onClick={NavToEvent}>
                    <img src={Event} alt="events" />
                    <p>Мероприятия</p>
                </div>
                <div className="home-item">
                    <img src={Map} alt="maps" />
                    <p>Карта</p>
                </div>
                <div className="home-item">
                    <img src={Faq} alt="faq" />
                    <p>FAQ</p>
                </div>
                <div className="home-item">
                    <img src={Profile} alt="profile" />
                    <p>Профиль</p>
                </div>
                <div className="home-item">
                    <img src={Quit} alt="quit" />
                    <p>Выйти</p>
                </div>
                <div className="home-item">
                    <img src={Reg} alt="reg" />
                    <p>Регистрация</p>
                </div>
                <div className="home-item">
                    <img src={Auth} alt="auth" />
                    <p>Авторизация</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
