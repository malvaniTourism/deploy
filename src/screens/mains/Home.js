import React from "react";
import Services from "../../components/banners/Services";
import IndexHead from "../../components/headers/IndexHead";
import OffrsSwiper from "../../components/Swipers/OffrsSwiper";

const Home = () => {

    return (
        <div>
            <IndexHead />
            <Services />
            <OffrsSwiper />
        </div>
    )
};

export default Home;