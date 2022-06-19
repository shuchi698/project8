import React from 'react';
import IntroComponent from './IntroComponent';
import './intro.css';


const Intro = ({ blogData }) => {

    return (
        <div className='Intro'>
            <div className='intro-box'>
                {
                    blogData.filter((item) => item.id === 0).map((data, index) => (
                        <IntroComponent data={data} classStyle='classStyle1' key={index} />
                    ))
                }
                {
                    blogData.slice(1, 3).map((data, index) => (
                        <IntroComponent data={data} classStyle='classStyle2' key={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default Intro;
