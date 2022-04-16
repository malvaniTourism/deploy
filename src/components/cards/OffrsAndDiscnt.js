import React, { useState } from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OffrsAndDicsnt = (props) => {
    // const [user, setUsers] = useState(props.data);

    return (
        <div className='offDiscCard'>
            <div className='commonPic offDiscImg' style={{ background: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8kgjlS4WvTIqyflqQfXRSnI2E52Bg7gOCvA&usqp=CAU)` }}>
                <text className='tenPoints whiteAlign'>5.8</text>
            </div>
            <div className='belowDiv'>
                <div>
                    <HiLocationMarker color="#FF0038" fontSize="15px" />
                    <text className='primText locText'>Malvan</text>
                </div>
                <div className='bold smText'>Vasant Vijay</div>
                <div style={{lineHeight:3}}>Starting from ₹ 250</div>
            </div>
        </div>
    )
}

export default OffrsAndDicsnt;