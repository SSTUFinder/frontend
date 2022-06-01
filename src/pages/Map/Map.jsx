import React, { useState } from "react";
import Header from "../../components/UI/Header/Header";
import { useNavigate } from "react-router-dom";


import "./Map.scss";
import MainMap from "../../assets/map/map.png";
import Marker from "../../assets/map/marker.svg";
import Food from "../../assets/map/food.svg";
import Gym from "../../assets/map/gym.svg";
import Art from "../../assets/map/art.svg";

const Map = () => {
    const navigate = useNavigate();
    const [isShown, setIsShown] = useState(false);
    const [info, setInfo] = useState("корпус");
    const [descr, setDescr] = useState("kek");

    return (
        <div>
            <Header title="карта" />
            <div className="map">
                <div className="map-map">
                    <img
                        src={MainMap}
                        alt="корпуса"
                        width="100%"
                        height="auto"
                    />
                    <img
                        src={Marker}
                        alt="1 корпус"
                        className="map-marker first"
                        onMouseEnter={() => {
                            setIsShown(true);
                            setInfo("корпус #1");
                            setDescr("ИММТ, ФТИ ");
                        }}
                        onMouseLeave={() => setIsShown(false)}
                    />
                    <img
                        src={Marker}
                        alt="5 корпус"
                        className="map-marker fifth"
                        onMouseEnter={() => {
                            setIsShown(true);
                            setInfo("корпус #5");
                            setDescr("ИнПИТ, ИСПМ");
                        }}
                        onMouseLeave={() => setIsShown(false)}
                        onClick={() => navigate("/five")}
                    />
                    <img
                        src={Marker}
                        alt="25 корпус"
                        className="map-marker ntb"
                        onMouseEnter={() => {
                            setIsShown(true);
                            setInfo("корпус #25");
                            setDescr("Научно-техническая библиотека");
                        }}
                        onMouseLeave={() => setIsShown(false)}
                    />
                    <img
                        src={Marker}
                        alt="2 корпус"
                        className="map-marker second"
                        onMouseEnter={() => {
                            setIsShown(true);
                            setInfo("корпус #2");
                            setDescr("ИнЭТиП");
                        }}
                        onMouseLeave={() => setIsShown(false)}
                    />
                    <img
                        src={Marker}
                        alt="4 корпус"
                        className="map-marker fourth"
                        onMouseEnter={() => {
                            setIsShown(true);
                            setInfo("корпус #4");
                        }}
                        onMouseLeave={() => setIsShown(false)}
                    />
                    <img
                        src={Food}
                        alt="столовая"
                        className="map-marker food"
                        onMouseEnter={() => {
                            setIsShown(true);
                            setInfo("столовая");
                            setDescr("приятного аппетита =)");
                        }}
                        onMouseLeave={() => setIsShown(false)}
                    />
                    <img
                        src={Gym}
                        alt="спортивный зал"
                        className="map-marker gym"
                        onMouseEnter={() => {
                            setIsShown(true);
                            setInfo("спортивный зал");
                            setDescr("в здоровом теле здоровый дух! ");
                        }}
                        onMouseLeave={() => setIsShown(false)}
                    />
                    <img
                        src={Marker}
                        alt="3 корпус"
                        className="map-marker three"
                        onMouseEnter={() => {
                            setIsShown(true);
                            setInfo("корпус #3");
                            setDescr("УРБАС");
                        }}
                        onMouseLeave={() => setIsShown(false)}
                    />
                    <img
                        src={Art}
                        alt="студклуб"
                        className="map-marker art"
                        onMouseEnter={() => {
                            setIsShown(true);
                            setInfo("студентческий клуб");
                            setDescr("самые крутые концерты!");
                        }}
                        onMouseLeave={() => setIsShown(false)}
                    />
                    {isShown && (
                        <div className="map-info">
                            <p className="map-info-main">{info}</p>
                            <p className="map-info-descr">{descr}</p>
                        </div>
                    )}
                    <img
                        src={Marker}
                        alt="6 корпус"
                        className="map-marker six"
                        onMouseEnter={() => {
                            setIsShown(true);
                            setInfo("корпус #6");
                            setDescr("УРБАС");
                        }}
                        onMouseLeave={() => setIsShown(false)}
                    />
                    <img
                        src={Gym}
                        alt="Стадион/Каток"
                        className="map-marker stadium"
                        onMouseEnter={() => {
                            setIsShown(true);
                            setInfo("стадион/каток");
                            setDescr("в здоровом теле здоровый дух! ");
                        }}
                        onMouseLeave={() => setIsShown(false)}
                    />
                    <img
                        src={Marker}
                        alt="7 корпус"
                        className="map-marker seven"
                        onMouseEnter={() => {
                            setIsShown(true);
                            setInfo("корпус #7");
                            setDescr("УРБАС");
                        }}
                        onMouseLeave={() => setIsShown(false)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Map;
