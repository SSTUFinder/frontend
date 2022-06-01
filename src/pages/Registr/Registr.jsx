import React, { useState, useContext } from "react";
import Header from "../../components/UI/Header/Header";
import axios from "axios";
import RoleContext from "../../services/roleContext";
import { useNavigate } from "react-router-dom";

import "../Auth/Auth.scss";
import UserIcon from "../../assets/reg/icon.svg";

const Registr = () => {
    const navigate = useNavigate();
    const { userRole, setUserRole } = useContext(RoleContext);
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [recordBook, setRecordBook] = useState("");

    const [errorInfo, setErrorInfo] = useState("");

    async function postUser() {
        if (userRole === "student") {
            let url = `http://localhost:8080/regStudent`;
            axios
                .post(url, {
                    firstname: name,
                    lastname: lastName,
                    password: password,
                    recordBookNumber: recordBook,
                    email: email,
                    login: login,
                })
                .then(function (response) {
                    console.log(response);
                    navigate("/")
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            let url = `http://localhost:8080/regTeacher`;
            axios
                .post(url, {
                    firstname: name,
                    lastname: lastName,
                    password: password,
                    email: email,
                    login: login,
                })
                .then(function (response) {
                    console.log(response);
                    navigate("/")
                })
                .catch(function (error) {
                    console.log(error);
                    setErrorInfo(error.response.data);
                });
        }
    }

    return (
        <div className="form">
            <Header name="регистрация" />
            <div className="form-user">
                <div
                    className={
                        userRole === "student"
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
                        userRole === "teacher"
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
                {userRole === "student" ? (
                    <div>
                        <p className="form-title">Логин</p>
                        <input
                            type="text"
                            className="form-input"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                        />
                        <p className="form-title">Имя</p>
                        <input
                            type="text"
                            className="form-input"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <p className="form-title">Фамилия</p>
                        <input
                            type="text"
                            className="form-input"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <p className="form-title">Номер зачетной книжки</p>
                        <input
                            type="text"
                            className="form-input"
                            value={recordBook}
                            onChange={(e) => setRecordBook(e.target.value)}
                        />
                        <p className="form-title">Почта</p>
                        <input
                            type="email"
                            className="form-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <p className="form-title">Пароль</p>
                        <input
                            type="password"
                            className="form-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                ) : (
                    <div>
                        <p className="form-title">Логин</p>
                        <input
                            type="text"
                            className="form-input"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                        />
                        <p className="form-title">Имя</p>
                        <input
                            type="text"
                            className="form-input"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <p className="form-title">Фамилия</p>
                        <input
                            type="text"
                            className="form-input"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <p className="form-title">Почта</p>
                        <input
                            type="email"
                            className="form-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <p className="form-title">Пароль</p>
                        <input
                            type="password"
                            className="form-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                )}
                <p className="form-error">{errorInfo}</p>

                <div className="form-btn">
                    <p className="form-btn-text" onClick={postUser}>
                        зарегистрироваться!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Registr;
