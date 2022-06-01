import React, { useState, useContext } from "react";
import Header from "../../components/UI/Header/Header";
import axios from "axios";
import RoleContext from "../../services/roleContext";

import "./Auth.scss";
import UserIcon from "../../assets/reg/icon.svg";

const Auth = () => {
    const { userRole, setUserRole } = useContext(RoleContext);
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    async function Auth() {
        let url = "http://localhost:8080/auth";
        axios
            .post(url, {
                login: login,
                password: password,
                role: userRole,
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="form">
            <Header name="авторизация" />
            <div className="form-user">
                <div
                    className={
                        userRole == "student"
                            ? "form-user-wrap activeU"
                            : "form-user-wrap"
                    }
                    onClick={() => setUserRole("student")}
                >
                    <img
                        src={UserIcon}
                        alt="student"
                        className="form-user-img"
                    />
                    <p className="form-user-title">студент</p>
                </div>
                <div
                    className={
                        userRole == "teacher"
                            ? "form-user-wrap activeU"
                            : "form-user-wrap"
                    }
                    onClick={() => setUserRole("teacher")}
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
                <p className="form-title">Логин</p>
                <input
                    type="text"
                    className="form-input"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                />
                <p className="form-title">Пароль</p>
                <input
                    type="password"
                    className="form-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="form-btn" onClick={Auth}>
                    <p className="form-btn-text">авторизироваться!</p>
                </div>
            </div>
        </div>
    );
};

export default Auth;
