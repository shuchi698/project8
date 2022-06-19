import React from 'react';
import { Link } from 'react-router-dom';

const TopPostComponent = ({data}) => {
    return (
        <div key={data.id} className='TopPostComponent'>
            <img src={data.img} alt="top-post" />
            <div className='top-post-comp-box'>
                <Link to={`/category/${data.category}/${data.id}`}>
                    <div className='top-post-comp-title'>
                        {data.title.substring(0, 42)+"..."}
                    </div>
                </Link>
                <div className='top-post-comp-details'>
                    <span className='top-post-comp-type'>{data.category} </span>
                    <span className='top-post-comp-date'>/ {data.date}</span>
                </div>
            </div>
        </div>
    );
}

export default TopPostComponent;