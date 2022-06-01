import React, { useState, useEffect } from "react";
import Header from "../../components/UI/Header/Header";
import Modal from "../../components/UI/Modal/Modal";
import axios from "axios";

import "./Profile.scss";

const Profile = () => {
    const [modalActive, setModalActive] = useState(false);
    const [profileData, setProfileData] = useState();

    async function getProfile() {
        let url = `http://localhost:8080/user/2?role=teacher`;
        let response = await axios.get(url);

        console.log(response.data);
        setProfileData(response.data);
    }

    useEffect(() => {
        getProfile();
    }, []);

    return (
        <div className="profile">
            <Header name="профиль" />
            <div className="profile-menu">
                <div
                    className="profile-btn"
                    onClick={() => setModalActive(true)}
                >
                    <p className="profile-btn-title">Верифицировать!</p>
                </div>
                {profileData ? (
                    <>
                        <div className="profile-item">
                            <p className="profile-item-title">Имя</p>
                            <p className="profile-item-descr">{`${profileData.firstname} ${profileData.lastname}`}</p>
                        </div>
                        <div className="profile-item">
                            <p className="profile-item-title">Почта</p>
                            <p className="profile-item-descr">
                                {profileData.email}
                            </p>
                        </div>
                        <div className="profile-item">
                            <p className="profile-item-title">
                                Номер студ. книжки
                            </p>
                            <p className="profile-item-descr">180588</p>
                        </div>
                    </>
                ) : (
                    <div>Загрузка...</div>
                )}
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                tut budut knopki i text
            </Modal>
        </div>
    );
};

export default Profile;
