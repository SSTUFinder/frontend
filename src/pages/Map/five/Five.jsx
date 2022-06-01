import React, { useState } from "react";
import Header from "../../../components/UI/Header/Header";

import "../Map.scss";
import FirstFloor from "../../../assets/map/five/floor1.png";
import SecondFloor from "../../../assets/map/five/floor2.png";
import Marker from "../../../assets/map/marker.svg";
import Food from "../../../assets/map/food.svg";
import Gym from "../../../assets/map/gym.svg";
import Art from "../../../assets/map/art.svg";

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
                    <img
                        src={FirstFloor}
                        alt="корпуса"
                        width="100%"
                        height="auto"
                    />
                </div>
                <div className="map-nav">
                    <button
                        className="map-nav-btn"
                        onClick={() => setFloor(floor - 1)}
                    >
                        Предыдущий
                    </button>
                    <span className="map-nav-counter">{floor}</span>
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
