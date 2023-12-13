import React from 'react'
import { Link } from 'react-router-dom'

import picture from "./../../assets/authorization/auth.jpg"

import "./Authorization.scss"

function Authorization() {
    return (
        <div className='authorization'>
            <img src={picture} className='auth__img' alt='' />
            <div className="auth__info">
                <h1 className="title">Создайте бесплатную учетную запись, чтобы найти свой индивидуальный путь обучения</h1>
                <form method="post" className="form">
                    <input className="input" type="text" placeholder="Email / phone" />
                    <input className="input" type="text" placeholder="Имя" />
                    <input className="input" type="text" placeholder="Фамилия" />
                    <Link className="btn" to="/additional">Sign up</Link>
                    <p className="privacy">При нажатии Sign up, я соглашаюсь с Brilliant's Terms и Privacy Policy</p>
                </form>
                <div className="to_login">
                    <span>Уже есть аккаунт? </span>
                    <Link className="to_login--link" to="/login">Log in</Link>
                </div>
            </div>
        </div>
    )
}

export default Authorization