import React from 'react'

import pic from "./../../assets/achives/close.svg"

import "./AchiveCard.scss"

function AchiveCard() {
    return (
        <div className='achive_card'>
            <p className="count"></p>
            <img src={pic} alt="" className="achive_card--img" />
            <div className="achive_card__info">
                <h2 className='title'>Настрой аватара!</h2>
                <p className='text'>Отредактируй аватара и получи ачивку</p>
            </div>

        </div>
    )
}

export default AchiveCard