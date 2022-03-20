import React, { useEffect, useState } from 'react'
import './Slider.css'
import { sliderData } from './../../SliderData';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = sliderData.length;
    const slides = document.getElementsByClassName('slide');

    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    };

    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    useEffect(() => {
        if (autoScroll) {
            auto();
        }
        for (let i = 0; i < sliderData.length; i++) {
            slides[i].classList.remove('current');

            if (i === currentSlide) {
                slides[i].classList.add('current');
            }
        }
        return () => clearInterval(slideInterval);
    }, [currentSlide]);


    return (
        <div className="achievements-box">
            <h1 className='achieve-heading'>Achievements</h1>
            <div className="achievements">
                <div className="arrow left" onClick={prevSlide}>
                    <img src="./images/left-arrow.svg" alt="left" />
                </div>
                <div className="slider">
                    {
                        sliderData.map((slide, index) => {
                            return (
                                <div className={index === currentSlide ? "slide current" : "slide"} key={index}>
                                    {index === currentSlide && (
                                        <div>
                                            <div className="slide-para">
                                                <p>{slide.para}</p>
                                            </div>
                                            <div className="slide-img">
                                                <img src={slide.image} alt="slide" />
                                                <div className="slide-heading">
                                                    <h1>{slide.team}</h1>
                                                    <h3>{slide.competition}</h3>
                                                </div>
                                            </div>
                                            <div className="slide-rank">
                                                <div className="rank-box">
                                                    <span className='rank'>1sts</span>
                                                    <span className='content'>Acceleration Events1</span>
                                                </div>
                                                <div className="rank-box">
                                                    <span className='rank'>1st</span>
                                                    <span className='content'>Acceleration Event1</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )
                        })
                    }
                </div>

                <div className="arrow right">
                    <img src="./images/right-arrow.svg" alt="left" onClick={nextSlide} />
                </div>
            </div>
        </div>
    )
}

export default Slider
