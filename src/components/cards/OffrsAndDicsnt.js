import React, { useState } from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OffrsAndDicsnt = (props) => {
    // const [user, setUsers] = useState(props.data);

    return (
        <div className='offDiscCard'>
            <div className='commonPic offDiscImg' style={{ background: `url(${props.data.picture})` }}>
                <text className='tenPoints whiteAlign'>{props.data.ratings}</text>
            </div>
            <div className='belowDiv'>
                <div>
                    <HiLocationMarker color="#FF0038" fontSize="15px" />
                    <text className='primText locText'>Malvan</text>
                </div>
                <div className='bold smText'>{props.data.name}</div>
                <div style={{lineHeight:3}}>Starting from ₹ {props.data.start_price}</div>
            </div>
        </div>
    )
}

export default OffrsAndDicsnt;