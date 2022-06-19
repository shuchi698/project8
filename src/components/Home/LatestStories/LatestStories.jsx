import React, { useState } from 'react';
// import BlogData from './../../BlogData';
import LatestStoriesComponent from './LatestStoriesComponent';
import './LatestStories.css';

const LatestStories = ({ blogData }) => {

    const [postNumber, setPostNumber] =useState(19)

    return (
        <div className='LatestStories'>
            <div className='latest-stories-box'>
                <div className='latest-stories-heading'>Latest Stories</div>
                <div className='latest-stories-flex'>
                    {
                        blogData.slice(16, postNumber).map((data, index) => (
                            <LatestStoriesComponent data={data} key={index}/>
                        ))
                    }
                </div>
            </div>
            <div className='view-more'onClick={() => setPostNumber(postNumber + 3)}>
                VIEW MORE <i className="fas fa-arrow-right"></i>
            </div>
        </div>
    );
}

export default LatestStories;