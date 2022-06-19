import React from 'react';
import { Link } from 'react-router-dom';


const IntroComponent = ({ data, classStyle }) => {
    return (
        <div key={data.id} className={classStyle} >
            <Link to={`/category/${data.category}/${data.id}`}>
                <img src={data.img} className='intro-img' alt="intro-img" />
                <div className='intro-title'>
                    <div className='intro-title-head'>{data.title}</div>
                    <div className='intro-title-subhead'>{data.category} / {data.date}</div>
                </div>
            </Link>
        </div>

    )
}

export default IntroComponent;