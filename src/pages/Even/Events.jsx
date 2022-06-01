import React, { useState, useEffect, useContext } from "react";
import Header from "../../components/UI/Header/Header";
import Modal from "../../components/UI/Modal/Modal";
import Eitem from "./Eitem/Eitem";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./Events.scss";
import "../Auth/Auth.scss";
import IdContext from "../../services/idContext";
import RoleContext from "../../services/roleContext";

function Events() {
    const { userId, setUserId } = useContext(IdContext);
    const { userRole, setUserRole } = useContext(RoleContext);
    const [eventsData, setEventsData] = useState();
    const [modalActive, setModalActive] = useState(false);

    const [title, setTitle] = useState("");
    const [descr, setDescr] = useState("");
    const [place, setPlace] = useState("");

    async function getEvents() {
        let url = "http://localhost:8080/events/";
        let response = await axios.get(url);

        console.log(response.data);
        setEventsData(response.data);
    }

    async function postEvent() {
        let url = `http://localhost:8080/events/add?id=${userId}&role=${userRole}`;
        axios
            .post(url, {
                place: place,
                title: title,
                description: descr,
            })
            .then(function (response) {
                console.log(response);
                getEvents();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        getEvents();
    }, []);

    return (
        <div className="event">
            <Header name="мероприятия" />
            <div className="event-menu">
                <div className="event-btn" onClick={() => setModalActive(true)}>
                    <p className="event-btn-title">Добавить мероприятие!</p>
                </div>
                {eventsData ? (
                    eventsData.map((item) => {
                        return <Eitem key={item.id} data={item} />;
                    })
                ) : (
                    <div>Загрузка...</div>
                )}

            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <div className="form-menu">
                    <p className="form-title">Название </p>
                    <input
                        type="text"
                        className="form-input"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <p className="form-title">описание</p>
                    <input
                        type="text"
                        className="form-input"
                        value={descr}
                        onChange={(e) => setDescr(e.target.value)}
                    />
                    <p className="form-title">место</p>
                    <input
                        type="text"
                        className="form-input"
                        value={place}
                        onChange={(e) => setPlace(e.target.value)}
                    />
                    <div className="form-btn">
                    <p className="form-btn-text" onClick={postEvent}>
                        отправить!
                    </p>
                </div>
                </div>
            </Modal>
        </div>
    );
}

export default Events;
