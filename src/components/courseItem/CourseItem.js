import React from 'react'

import pic from "./../../assets/courses/1.png"
import star from "./../../assets/icons/stars/1.png"

import "./CourseItem.scss"

function CourseItem() {
    return (
        <div className='course_item'>
            <img src={pic} alt="" className="course_item--img" />
            <div className="course_item__info">
                <h3 className="title">Программироавние на python</h3>
                <p className="text">Изучение основ программирования на языке Python</p>
            </div>
            <div className="progress__wrapper"><p className='progress'>75%</p></div>
            <div className="favotite">
                <img src={star} alt="" />
            </div>
        </div>
    )
}

export default CourseItem