import React from 'react'
import { Link } from 'react-router-dom'

import logo from "./../../assets/icons/logo-pink.svg"
import menu_1 from "./../../assets/menu/profile.svg"
import menu_2 from "./../../assets/menu/courses.svg"
import menu_3 from "./../../assets/menu/classmates.svg"
import menu_4 from "./../../assets/menu/support.svg"

import './Menu.scss'

function Menu() {
    return (
        <div className='menu'>
            <img className='logo' src={logo} />
            <ul className="menu__list">
                <li className="menu__list__item">
                    <Link to="/profile" className='menu__list__item--link active'>
                        <img src={menu_1} alt="" className="menu__list__item--img" />
                        <p className="menu__list__item--p">Профиль</p>
                    </Link>
                </li>
                <li className="menu__list__item">
                    <Link to="/courses" className='menu__list__item--link '>
                        <img src={menu_2} alt="" className="menu__list__item--img" />
                        <p className="menu__list__item--p">Курсы</p>
                    </Link>
                </li>
                <li className="menu__list__item">
                    <Link to="classmates" className='menu__list__item--link'>
                        <img src={menu_3} alt="" className="menu__list__item--img" />
                        <p className="menu__list__item--p">Однокурсники</p>
                    </Link>
                </li>
                <li className="menu__list__item">
                    <Link to="support" className='menu__list__item--link'>
                        <img src={menu_4} alt="" className="menu__list__item--img" />
                        <p className="menu__list__item--p">Поддержка</p>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu