import React, { useState } from "react";

import "../Map.scss";
import MainMap from "../../../assets/map/map.png";
import Marker from "../../../assets/map/marker.svg";
import Food from "../../../assets/map/food.svg";
import Gym from "../../../assets/map/gym.svg";
import Art from "../../../assets/map/art.svg";
import Header from "../../../components/UI/Header/Header";

const Five = () => {
    const [isShown, setIsShown] = useState(false);
    const [info, setInfo] = useState("корпус");
    const [descr, setDescr] = useState("kek");

    return (
        <div>
            <Header title="пятый корпус"/>
            <div className="map">
                <div className="map-map">
                    <img
                        src={MainMap}
                        alt="корпуса"
                        width="100%"
                        height="auto"
                    />
                    
                </div>
            </div>
        </div>
    );
};

export default Five;
