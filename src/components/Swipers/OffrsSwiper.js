import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OffrsAndDiscnt from "../cards/OffrsAndDiscnt";
import LeftArr from '../../assets/images/arrow_left.png'
import RightArr from '../../assets/images/arrow_right.png'

const OffrsSwiper = () => {
    const [slides, setSlides] = useState(3);
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        window.addEventListener('resize', getDimension)
        return () => {
            window.removeEventListener('resize', getDimension)
        }
    }, [slides])

    const getDimension = () => {
        console.log('log', window.innerWidth);
        if (window.innerWidth <= 600) {
            console.log('less');
            setIsMobile(true)
            setSlides(1)
        } else {
            setIsMobile(false)
            setSlides(3)
        }
    }
    const settings = {
        dots: isMobile,
        arrows: !isMobile,
        infinite: true,
        speed: 500,
        slidesToShow: slides,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        className: 'mySlider',
        nextArrow: <img className="bkArrow" src={LeftArr} height={60} width={60}/>,
        prevArrow: <img className="bkArrow" src={RightArr} height={60} width={60}/>
    };

    return (
        <Slider {...settings}>
            <OffrsAndDiscnt />
            <OffrsAndDiscnt />
            <OffrsAndDiscnt />
            <OffrsAndDiscnt />
        </Slider>
    );
}

export default OffrsSwiper;