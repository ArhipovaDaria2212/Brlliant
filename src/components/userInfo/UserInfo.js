import React from 'react'

import { Link } from 'react-router-dom'

import avatar from "./../../assets/avatars/1.png"

import "./UserInfo.scss"

function UserInfo() {
    return (
        <div className='user_info'>
            <div className="user_info--img">
                <img src={avatar} alt="" />
            </div>
            <div className="user_info__info">
                <p className="user_info__name">Карина Доманина</p>
                <div className="user_info__additional">
                    <p className="user_info__categoty">Student</p>
                    <Link className='user_info__settings'>настройки аватара</Link>
                </div>
            </div>
        </div>
    )
}

export default UserInfo