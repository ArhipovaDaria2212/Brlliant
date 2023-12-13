import React from 'react'
import { Link } from 'react-router-dom'

import picture from "./../../assets/login/1.jpg"

import "./Login.scss"

function Login() {
    return (
        <div className='login'>
            <img src={picture} className='login__img' alt='' />
            <div className="login__info">
                <h1 className="title">Войти</h1>
                <form method="post" className="form">
                    <input className="input" type="text" placeholder="Логин" />
                    <input className="input" type="text" placeholder="Пароль" />
                    <Link className="btn" to="/profile">Продолжить</Link>
                </form>
                <Link className="reset" to="/">Не помню пароль</Link>
            </div>
        </div>
    )
}

export default Login