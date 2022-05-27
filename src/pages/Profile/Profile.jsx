import React, {useState} from 'react'
import Header from '../../components/UI/Header/Header'
import Modal from '../../components/UI/Modal/Modal'

import "./Profile.scss"

const Profile = () => {

    const [modalActive, setModalActive] = useState(false)

    return (
        <div className='profile'>
            <Header name="профиль"/>    
            <div className="profile-menu">
                <div className="profile-btn" onClick={() => setModalActive(true)}>
                    <p className='profile-btn-title'>Верифицировать!</p>
                </div>
                <div className="profile-item">
                    <p className='profile-item-title'>Имя</p>
                    <p className='profile-item-descr'>kek</p>
                </div>
                <div className="profile-item">
                    <p className='profile-item-title'>Почта</p>
                    <p className='profile-item-descr'>kek</p>
                </div>
                <div className="profile-item">
                    <p className='profile-item-title'>Номер студ. книжки</p>
                    <p className='profile-item-descr'>kek</p>
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                tut budut knopki i text
            </Modal>
        </div>
    )
}

export default Profile