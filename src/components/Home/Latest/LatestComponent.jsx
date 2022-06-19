import React from 'react';
import { Link } from 'react-router-dom';

const LatestComponent = ({ data }) => {
    return (
        <div className='LatestComponent' key={data.id} >
            <Link to={`/category/${data.category}/${data.id}`}>
                <img src={data.img} alt="latest-post" />
                <div className='latest-post-title'>{data.title.substring(0, 50) + "..."}</div>
            </Link>
            <p>{data.description}</p>
            <div>
                <span className='latest-post-type'>{data.category} </span>
                <span className='latest-post-date'>/ {data.date}</span>
            </div>
        </div>
    );
}

export default LatestComponent;