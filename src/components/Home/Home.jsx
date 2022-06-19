import React, { useState, useEffect } from 'react';
import Intro from './Intro/Intro';
import Latest from './Latest/Latest';
import LatestArticles from './LatestArticles/LatestArticles';
import LatestStories from './LatestStories/LatestStories';
import axios from 'axios';
import SpinnerComp from '../Spinner/SpinnerComp';

const Home = () => {
    const [blogData, setBlogData] = useState([]);

    const [loading, setLoading] = useState(false);

    useEffect(() => {

        axios.get("https://sheltered-fjord-87205.herokuapp.com/api/home")
            .then(response => {
                setBlogData(response.data.data);
                setLoading(true)
            })
            .catch(err => {
                console.log(err);
            })

    }, [])

    return (
        <>
        {
            loading ?
            <div className='Home'>
                    <Intro blogData={blogData} />
                    <Latest blogData={blogData} />
                    <LatestArticles blogData={blogData} />
                    <LatestStories blogData={blogData} />
            </div>
            : <SpinnerComp />
        }
        </>
    )
}

export default Home;