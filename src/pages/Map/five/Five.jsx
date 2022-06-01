import React, { useState } from "react";
import Header from "../../../components/UI/Header/Header";

import "../Map.scss";
import FirstFloor from "../../../assets/map/five/floor1.png";
import SecondFloor from "../../../assets/map/five/floor2.png";
import Marker from "../../../assets/map/marker.svg";
import Food from "../../../assets/map/food.svg";
import Gym from "../../../assets/map/gym.svg";
import Art from "../../../assets/map/art.svg";
import Toilet from "../../../assets/map/toilet.svg"

const Five = () => {
    const [isShown, setIsShown] = useState(false);
    const [info, setInfo] = useState("корпус");
    const [descr, setDescr] = useState("kek");
    const [floor, setFloor] = useState(1);

    return (
        <div>
            <Header title="пятый корпус" />
            <div className="map">
                <div className="map-map">
                    {floor === 1 ? (
                        <>
                            <img
                                src={FirstFloor}
                                alt="корпуса"
                                width="100%"
                                height="auto"
                            />
                            <img
                                src={Marker}
                                alt="ИнПИТ"
                                className="map-marker five-inpit"
                                onMouseEnter={() => {
                                    setIsShown(true);
                                    setInfo("ИнПИТ");
                                    setDescr(
                                        "+7 (8452) 99-87-15 skumova@mail.ru"
                                    );
                                }}
                                onMouseLeave={() => setIsShown(false)}
                            />
                        </>
                    ) : (
                        <>
                            <img
                                src={SecondFloor}
                                alt="корпуса"
                                width="100%"
                                height="auto"
                            />
                            <img
                                src={Marker}
                                alt="ИнПИТ"
                                className="map-marker kek"
                                onMouseEnter={() => {
                                    setIsShown(true);
                                    setInfo("Сдача документов");
                                    setDescr(
                                        "б-ПИНЖ-41 необходимо сдать документы по практике"
                                    );
                                }}
                                onMouseLeave={() => setIsShown(false)}
                            />
                        </>
                    )}
                    <img
                                src={Toilet}
                                alt="туалет"
                                className="map-marker toilet"
                                onMouseEnter={() => {
                                    setIsShown(true);
                                    setInfo("Туалет");
                                    setDescr(
                                        " "
                                    );
                                }}
                                onMouseLeave={() => setIsShown(false)}
                            />
                    {isShown && (
                        <div className="map-info bottom">
                            <p className="map-info-main">{info}</p>
                            <p className="map-info-descr">{descr}</p>
                        </div>
                    )}
                </div>
                <div className="map-nav">
                    <button
                        className="map-nav-btn"
                        onClick={() => setFloor(floor - 1)}
                    >
                        Предыдущий
                    </button>
                    <span className="map-nav-counter">{floor} этаж/4</span>
                    <button
                        className="map-nav-btn"
                        onClick={() => setFloor(floor + 1)}
                    >
                        Следующий
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Five;
