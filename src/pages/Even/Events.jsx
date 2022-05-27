import React, {useState} from "react";
import Header from "../../components/UI/Header/Header";
import Modal from "../../components/UI/Modal/Modal";
import Eitem from "./Eitem/Eitem";

import "./Events.scss";


function Events() {

    const [event, setEvent] = useState({});
    const [modalActive, setModalActive] = useState(false)


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