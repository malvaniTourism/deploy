import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import OffrsAndDicsnt from "../../components/cards/OffrsAndDicsnt";
import { comnGet } from "../../services/comnServ";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const OffrsSwiper = () => {
    const [slides, setSlides] = useState(3);
    const [isMobile, setIsMobile] = useState(false);
    const [offrsNDiscData, setOffrsNDiscData] = useState([]);

    useEffect(() => {
        window.addEventListener('resize', getDimension)
        getOffrsNDiscData();
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
            setSlides(1)
        }
    }

    const settings = {
        dots: !isMobile,
        arrows: !isMobile,
        infinite: true,
        speed: 500,
        slidesToShow: slides,
        slidesToScroll: 1
    };

    const getOffrsNDiscData = async() => {
        await comnGet('projects')
            .then(res => {
                console.log('00', res);
                if (res.data.success) {
                    setOffrsNDiscData(res.data.data.data)
                }
            })
            .catch(err => {
                console.log(err);
            })
        console.log('data', offrsNDiscData)

    }

    return (
        <Slider {...settings}>
            {offrsNDiscData.map(data => {
                return (
                    <OffrsAndDicsnt data={data}/>
                )
            })}
        </Slider>
    )
};

export default OffrsSwiper;