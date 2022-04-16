import React from "react";
import Image from '../../assets/images/BG_1.png'
import BookNow from "../buttons/BookNow";

const IndexHead = () => {

    return (
        <div style={{ background: 'url(' + Image + ')', height: 600, width: '100%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', }}>
            <div className="flex-row alignCenter justifyEven">
                <h2 className="whiteText headText">Devgad Beach</h2>
                <div style={{display: 'flex', width: '35%', justifyContent: 'center'}}>
                <BookNow />
                </div>
            </div>
            <div className="flex-row indHdDesc">
                <div className="flex-col">
                    <text className="yellowText">₹ 2000</text>
                    <text className="whiteText">2 Days tour for 2 people</text>
                </div>
                <div className="flex-col">
                    <text className="yellowText">Hotels</text>
                    <text className="whiteText">Hotels of choice</text>
                </div>
                <div className="flex-col">
                    <text className="yellowText">Starts from</text>
                    <text className="whiteText">20 April or later</text>
                </div>
            </div>
        </div>
    )
};

export default IndexHead;