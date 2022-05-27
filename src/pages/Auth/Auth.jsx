import React from "react";
import Header from "../../components/UI/Header/Header";

import "./Auth.scss";

const Auth = () => {
    return (
        <div className="form">
            <Header name="авторизация"/>
            <div className="form-menu">
                <p className="form-title">Логин</p>
                <input type="text" className="form-input" />
                <p className="form-title">Пароль</p>
                <input type="password" className="form-input" />
                <div className="form-btn">
                    <p className="form-btn-text">авторизироваться!</p>
                </div>
            </div>
        </div>
    );
};

export default Auth;
