import React, {useState} from "react";
import Header from "../../components/UI/Header/Header";
import Modal from "../../components/UI/Modal/Modal";
import Eitem from "./Eitem/Eitem";
import axios from "axios";
import { useNavigate } from "react-router-dom";



import "./Events.scss";


function Events() {

    const [events, setEvents] = useState({});
    const [modalActive, setModalActive] = useState(false)


    async function getEvents() {
        let url = "http://localhost:8080/events/";
        let response = await axios.get(url);

        console.log(response.data);
        setEvents(response.data);
    }

    getEvents();


    return (
        <div className="event">
            <Header name="мероприятия"/>
            <div className="event-menu">
                <div className="event-btn" onClick={() => setModalActive(true)}>
                    <p className="event-btn-title">
                        Добавить мероприятие!
                    </p>
                </div>
                <Eitem />
                <Eitem />
                <Eitem />
                <Eitem />
                <Eitem />
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                kek lol cheburek
            </Modal>
        </div>
    );
}

export default Events;