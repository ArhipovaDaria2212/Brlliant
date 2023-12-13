import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';


import "./Profile.scss"
import './../../style/calendar.scss';
import 'pure-react-carousel/dist/react-carousel.es.css';

import Menu from '../../components/menu/Menu'
import UserInfo from '../../components/userInfo/UserInfo'
import SearchPanel from '../../components/searchPanel/SearchPanel'
import AchiveCard from '../../components/achiveCard/AchiveCard';
import CourseItem from '../../components/courseItem/CourseItem';

function Profile() {
    const [date, setDate] = useState(new Date());

    return (
        <div className='profile'>
            <Menu />
            <div className="profile__main">
                <div className="profile__header">
                    <UserInfo />
                    <SearchPanel />
                </div>
                <h1 className='title'>Профиль</h1>
                <div className="progress">
                    <div className='calendar-container'>
                        <Calendar onChange={setDate} value={date}
                            showNeighboringMonth={false}>
                        </Calendar>
                    </div>
                    <div className="achives">
                        <h2 className='achives__title'>Цели и достижения</h2>
                        <div className="achives__slider">
                            <CarouselProvider
                                naturalSlideWidth={250}
                                naturalSlideHeight={335.5}
                                totalSlides={4}
                                visibleSlides={3}
                                infinite={true}
                            >
                                <ButtonBack className='prev'></ButtonBack>
                                <Slider className='slider'>
                                    <Slide index={0}>
                                        <AchiveCard />
                                    </Slide>
                                    <Slide index={1}>                                        <AchiveCard />
                                        <AchiveCard />
                                    </Slide>
                                    <Slide index={2}>                                        <AchiveCard />
                                        <AchiveCard />
                                    </Slide>
                                    <Slide index={3}>                                        <AchiveCard />
                                        <AchiveCard />
                                    </Slide>
                                </Slider>
                                <ButtonNext className='next'></ButtonNext>
                            </CarouselProvider>
                        </div>
                    </div>
                </div>
                <div className="courses">
                    <h1 className='courses__title'>Недавние курсы</h1>
                    <div className="courses__list">
                        <CourseItem />
                        <CourseItem />
                        <CourseItem />
                        <CourseItem />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile