import React, { useState, useEffect, useContext } from "react";
import Header from "../../components/UI/Header/Header";
import Modal from "../../components/UI/Modal/Modal";
import axios from "axios";

import "./Profile.scss";
import IdContext from "../../services/idContext";
import RoleContext from "../../services/roleContext";

const Profile = () => {
    const [modalActive, setModalActive] = useState(false);
    const [profileData, setProfileData] = useState();
    const { userId, setUserId } = useContext(IdContext);
    const { userRole, setUserRole } = useContext(RoleContext);

    async function getProfile() {
        let url = `http://localhost:8080/user/${userId}?role=${userRole}`;
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
                {profileData ? (
                    <>
                        {userRole === "student" ? (
                            <>
                                <div
                                    className="profile-btn"
                                    onClick={() => setModalActive(true)}
                                >
                                    <p className="profile-btn-title">
                                        Верифицировать!
                                    </p>
                                </div>
                                <div className="profile-item">
                                    <p className="profile-item-title">
                                        Номер студ. книжки
                                    </p>
                                    <p className="profile-item-descr">
                                        {profileData.recordBookNumber}
                                    </p>
                                </div>
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
                                    <p className="profile-item-title">Логин</p>
                                    <p className="profile-item-descr">
                                        {profileData.login}
                                    </p>
                                </div>
                            </>
                        ) : (
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
                                    <p className="profile-item-title">Логин</p>
                                    <p className="profile-item-descr">
                                        {profileData.login}
                                    </p>
                                </div>
                            </>
                        )}
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
