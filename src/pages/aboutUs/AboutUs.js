import React, { useState, useEffect } from "react";
import axios from 'axios';

import { Link } from 'react-router-dom'

import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Review from "../../components/review/Review";

import about_as_1 from "./../../assets/about_us/users/1.png"
import about_as_2 from "./../../assets/about_us/users/2.png"
import about_as_3 from "./../../assets/about_us/users/3.png"
import gif from "./../../assets/about_us/reviews/1.gif"

import "./AboutUs.scss"


function AboutUs() {

    let [reviewData, setReviewData] = useState(null);

    useEffect(() => {

        axios.get('http://localhost:8080/reviews')
            .then(response => {
                setReviewData(response.data);
            })
            .catch(error => {
                console.error('Ошибка при получении данных:', error);
            });
    }, []);
    //
    // if (!reviewData) {
    //     return <div>Loading...</div>;
    // }

    return (
        <>
            <Header />
            <main className="main">
                <section className="section-1 about_us">
                    <div className="content">
                        <div className="section-1__inner">
                            <h1 className="title">Мы строим лучшее место на Земле для Вашего саморазвития</h1>
                            <p className="desc">В процессе работы мы были рады получить много любви от наших пользователей</p>
                        </div>
                    </div>
                </section>

                <section className="section-2 about_us">
                    <div className="content">
                        <div className="section-2__inner">
                            <h2 className="title">Кто учится в Brilliant?</h2>
                            <div className="cards">
                                <div className="cards__item">
                                    <img src={about_as_1} alt="Студенты" className="cards__item--img" />
                                    <h3 className="cards__item--title">Студенты</h3>
                                    <div className="cards__item--text">
                                        <p className="cards__item--p">Осваивайте концепции с помощью решения задач по математике, естественным
                                            наукам и информатике</p>
                                        <p className="cards__item--p">
                                            Развивайте интуицию вместо заучивания формул
                                        </p>
                                    </div>
                                </div>
                                <div className="cards__item">
                                    <img src={about_as_2} alt="Профессионалы"
                                        className="cards__item--img cards__item--img--round" />
                                    <h3 className="cards__item--title">Профессионалы</h3>
                                    <div className="cards__item--text">
                                        <p className="cards__item--p">Обновляйте свою базу знаний</p>
                                        <p className="cards__item--p">
                                            Изучайте темы от теории вероятностей до компьютерных наук и машинного обучения
                                        </p>
                                    </div>
                                </div>
                                <div className="cards__item">
                                    <img src={about_as_3} alt="Слушатели" className="cards__item--img" />
                                    <h3 className="cards__item--title">Слушатели</h3>
                                    <div className="cards__item--text">
                                        <p className="cards__item--p">Поддерживайте активность своего ума и совершенствуйте навыки критического
                                            мышления
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-3 about_us">
                    <div className="content">
                        <div className="section-3__inner">
                            <div className="filters">
                                <div className="filters__info">
                                    <div className="filters__info--text">
                                        <h2 className="title">Отзывы пользователей</h2>
                                        <p className="desc">Более 50000 5-звездочных отзывов</p>
                                    </div>
                                    <img src={gif} alt="Отзывы" className="filters__info--img" />
                                </div>
                                <div className="filters__form">
                                    <div className="custom-select">
                                        <select autoComplete="true" name="select" id="filter_select" className="filters__form--select">
                                            <option value="new">Новые</option>
                                            <option value="high_rating">сначала с высокой оценкой</option>
                                            <option value="low_rating">сначала с низкой оценкой</option>
                                        </select>
                                    </div>
                                    <div className="filters__buttons">
                                        <button type="menu" data-filter="all" className="filters__buttons--btn active">Все</button>
                                        <button data-filter="students" className="filters__buttons--btn">студенты</button>
                                        <button data-filter="teachers" className="filters__buttons--btn">учителя</button>
                                        <button data-filter="professionals" className="filters__buttons--btn">Профессионалы</button>
                                        <button data-filter="parents" className="filters__buttons--btn">родители</button>
                                        <button data-filter="life-long_leaners" className="filters__buttons--btn">слушатели</button>
                                    </div>
                                </div>
                            </div>
                            <div className="reviews">

                                { reviewData && reviewData.map((review, index) => (
                                    <Review key={index}
                                            stars={review.grade}
                                            title={review.name}
                                            text={review.text}
                                            category={review.category} />
                                ))}

                                <div className="pagination">
                                    <button>&lt;</button>
                                    <span className="current"> 1</span> of <span className="all">9 </span>
                                    <button>&gt;</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-4 about_us">
                    <div className="content">
                        <div className="section-4__inner">
                            <h2 className="title">
                                Join over 10 million people learning on Brilliant
                            </h2>
                            <Link to="/auth" className="section-4--btn btn--outline">Начать прямо сейчас</Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

        </>
    )
}

export default AboutUs