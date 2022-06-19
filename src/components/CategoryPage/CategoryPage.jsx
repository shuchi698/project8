import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
// import BlogData from '../BlogData';
import LatestArticlesComponent from '../Home/LatestArticles/LatestArticlesComponent';
import TopPostComponent from '../Home/LatestArticles/TopPostComponent';
import './CategoryPage.css';
import axios from 'axios';
import SpinnerComp from './../Spinner/SpinnerComp';

window.onbeforeunload = () => {
    window.scrollTo(0, 0);
}

const CategoryPage = () => {

    const [ queryParams ] = useSearchParams();
    const name = queryParams.get('name');


    const [postNumber, setPostNumber] = useState(5);

    const [blogData, setBlogData] = useState([]);

    const [loading, setLoading] = useState(false);

    useEffect(() => {

        axios.get(`https://sheltered-fjord-87205.herokuapp.com/api/category/?name=${name}`)
            .then(response => {
                setBlogData(response.data.data);
                setLoading(true)
            })
            .catch(err => {
                console.log(err);
            })

    }, [name]);

    return (
        <>
            {
                loading ?
                <div className='CategoryPage'>
                {
                    blogData ? <div>
                        <div className='LatestArticles'>
                            <div className='latest-articles-heading'>{name}</div>
                            <div className='latest-articles-box'>
                                <div className='latest-articles-left'>
                                    {
                                        blogData.slice(0, postNumber).map((data, index) => (
                                            <LatestArticlesComponent data={data} key={index} />
                                        ))
                                    }
                                    <div className='load-more' onClick={() => setPostNumber(postNumber + 2)}>
                                        <i className="fas fa-arrow-down"></i>LOAD MORE
                                    </div>
                                </div>
                                <div className='latest-articles-right'>
                                    <div className='top-post-heading'>Top Posts</div>
                                    <div className='top-post-flexbox'>
                                        {
                                            blogData.slice(1, 2).map((data, index) => (
                                                <div key={index} >
                                                    <img src={data.img} alt="top-post" />
                                                    <Link to={`/category/${data.category}/${data.id}`}>
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
                                            blogData.slice(4, 7).map((data, index) => (
                                                <TopPostComponent data={data} key={index}/>
                                            ))
                                        }
                                    </div>
                                    <div className='advertisement-box'>Advertisement</div>
                                </div>
                            </div>
                        </div>
                    </div> : null
                }
            </div> : <SpinnerComp />
            }
        </>
    );
}

export default CategoryPage;