import React from "react";

const Services = () => {

    return (
        <div className="Row justifyEven" style={{marginTop: 80, marginBottom: 80}}>
            <div>
                <div className="servDiv">
                    <text className="lgText whiteBold left">Hotels</text>
                    <text className="whiteAlign left">Special offers & Discounts on the Best hotels! </text>
                </div>
                <div className="servDiv">
                    <text className="lgText whiteBold left">Tours</text>
                    <text className="whiteAlign left">Packed Holiday Plans!</text>
                </div>
                <div className="servDiv">
                    <text className="lgText whiteBold left">Restaurants</text>
                    <text className="whiteAlign left">Best Places to eat!</text>
                </div>
            </div>
            <div style={{width: 250}}>
                <h1 style={{lineHeight: 2.5}}>Our Services</h1>
                <text>No vis fastidii accumsan, ignota postulant ea mea. Vis et prima integre, ignota postulant ea mea ei vis ridens moderatius.</text>
            </div>
        </div>
    )
};

export default Services;