import React, {useState} from "react";
import Header from "../../components/UI/Header/Header";
import Eitem from "./Eitem/Eitem";

import "./Events.scss";


function Events() {

    const [event, setEvent] = useState([]);


    return (
        <div className="event">
            <Header name="мероприятия"/>
            <div className="event-menu">
                <Eitem />
                <Eitem />
                <Eitem />
                <Eitem />
                <Eitem />
            </div>
        </div>
    );
}

export default Events;