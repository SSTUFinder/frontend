import React from "react";
import Header from "../../components/UI/Header/Header";

import "./Faq.scss";

const Faq = () => {
    return (
        <div className="faq">
            <Header name="справка" />
            <div className="faq-menu">
                <div className="faq-item">
                    <p className="faq-item-title">Что это?</p>
                    <p className="faq-item-descr">
                        Это SSTU.Finder - социальная платформа и по
                        совместительству интерактивная карта корпусов нашего
                        ВУЗа. В приложение вы найдете список мероприятий, по
                        нажатию на который вы перейдете в месту его проведения!
                    </p>
                </div>
                <div className="faq-item">
                    <p className="faq-item-title">
                        Почему я не могу добавить мероприятие?
                    </p>
                    <p className="faq-item-descr">
                        Если вы преподователь, вы уже это можете. Если вы
                        студент, нажмите на кнопку верификации в профиле, и в
                        текстовом поле укажите причину. Вы
                        староста/профорг/организатор мероприятия. В течение
                        суток вашу верификацию одобрят! В случае если не
                        одобрят, вам придет на почту сообщение о причине отказа.
                    </p>
                </div>
                <div className="faq-item">
                    <p className="faq-item-title">Как добавить меропритие?</p>
                    <p className="faq-item-descr">
                        Перейдите на страницу мероприятий, нажмите кнопку
                        добавить мероприятие, и заполните все поля!
                    </p>
                </div>
                <div className="faq-item">
                    <p className="faq-item-title">Как пользоваться картой?</p>
                    <p className="faq-item-descr">
                        По переходу на страницу карты, перед вами карта всех
                        корпусов. Вы можете на них нажать, и перейдете на карту
                        конкретного корпуса!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Faq;
