import React, {useState, useEffect} from "react";
import Header from "../../components/UI/Header/Header";
import Modal from "../../components/UI/Modal/Modal";
import Eitem from "./Eitem/Eitem";
import axios from "axios";
import { useNavigate } from "react-router-dom";



import "./Events.scss";


function Events() {

    const [eventsData, setEventsData] = useState();
    const [modalActive, setModalActive] = useState(false)


    async function getEvents() {
        let url = "http://localhost:8080/events/";
        let response = await axios.get(url);

        console.log(response.data);
        setEventsData(response.data);
    }

    useEffect( () => {
        getEvents();
    }, [] )

    return (
        <div className="event">
            <Header name="мероприятия"/>
            <div className="event-menu">
                <div className="event-btn" onClick={() => setModalActive(true)}>
                    <p className="event-btn-title">
                        Добавить мероприятие!
                    </p>
                </div>
                {eventsData ? (
                    eventsData.map((item) => {
                        return <Eitem key={item.id} data={item}/>
                    })
                ) : (
                    <div>Загрузка...</div>
                )
                }
                {/* <Eitem />
                <Eitem />
                <Eitem />
                <Eitem />
                <Eitem /> */}
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                kek lol cheburek
            </Modal>
        </div>
    );
}

export default Events;