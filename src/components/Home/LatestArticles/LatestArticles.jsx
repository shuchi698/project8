import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LatestArticles.css';
// import BlogData from '../../BlogData';
import LatestArticlesComponent from './LatestArticlesComponent';
import CarouselComponent from './CarouselComponent';
import TopPostComponent from './TopPostComponent';

const LatestArticles = ({ blogData }) => {

    const [postNumber, setPostNumber] = useState(10);

    return (
        <div className='LatestArticles'>
            <div className='latest-articles-heading'>Latest Articles</div>
            <div className='latest-articles-box'>
                <div className='latest-articles-left'>
                    {
                        blogData.slice(6, postNumber).map((data, index) => (
                            <LatestArticlesComponent data={data} key={index} />
                        ))
                    }
                    <div className='load-more' onClick={() => setPostNumber(postNumber + 2)}>
                        <i className="fas fa-arrow-down"></i>  LOAD MORE
                    </div>
                    <CarouselComponent blogData={blogData} />
                </div>
                <div className='latest-articles-right'>
                    <div className='advertisement-box'>Advertisement</div>
                    <div className='top-post-heading'>Top Posts</div>
                    <div className='top-post-flexbox'>
                        {
                            blogData.filter(blog => blog.id === 23).map((data, index) => (
                                <div key={index}>
                                    <Link to={`/category/${data.category}/${data.id}`}>
                                        <img src={data.img} alt="top-post" />
                                        <div className='top-post-title'>{data.title}</div>
                                    </Link>
                                    <div className='top-post-details'>
                                        <span className='top-post-type'>{data.category} </span>
                                        <span className='top-post-date'>/ {data.date}</span>
                                    </div>
                                </div>
                            ))
                        }

                        {
                            blogData.slice(11, 14).map((data, index) => (
                                <TopPostComponent data={data} key={index}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LatestArticles;