import React, { useState } from "react";
import Header from "../../components/UI/Header/Header";

import "../Auth/Auth.scss";
import UserIcon from "../../assets/reg/icon.svg";

const Registr = () => {
    const [userType, setUserType] = useState("student");


    return (
        <div className="form">
            <Header name="регистрация" />
            <div className="form-user">
                <div
                    className="form-user-wrap"
                    onClick={() => setUserType("student")}
                >
                    <img
                        src={UserIcon}
                        alt="student"
                        className="form-user-img"
                    />
                    <p className="form-user-title">студент</p>
                </div>
                <div
                    className="form-user-wrap"
                    onClick={() => setUserType("teacher")}
                >
                    <img
                        src={UserIcon}
                        alt="teacher"
                        className="form-user-img"
                    />
                    <p className="form-user-title">преподаватель</p>
                </div>
            </div>

            <div className="form-menu">
                {userType === "student" ? (
                    <div>
                        <p className="form-title">Логин</p>
                        <input type="text" className="form-input" />
                        <p className="form-title">Имя и Фамилия</p>
                        <input type="text" className="form-input" />
                        <p className="form-title">Номер зачетной книжки</p>
                        <input type="text" className="form-input" />
                        <p className="form-title">Почта</p>
                        <input type="email" className="form-input" />
                        <p className="form-title">Пароль</p>
                        <input type="password" className="form-input" />
                    </div>
                ) : (
                    <div>
                        <p className="form-title">Логин</p>
                        <input type="text" className="form-input" />
                        <p className="form-title">Имя и Фамилия</p>
                        <input type="text" className="form-input" />
                        <p className="form-title">Почта</p>
                        <input type="email" className="form-input" />
                        <p className="form-title">Пароль</p>
                        <input type="password" className="form-input" />
                    </div>
                )}
                <div className="form-btn">
                    <p className="form-btn-text">зарегистрироваться!</p>
                </div>
            </div>
        </div>
    );
};

export default Registr;
