import React from 'react';
import { Link } from 'react-router-dom';
import AuthorDetailsComponent from './AuthorDetailsComponent';

const RelatedReadComponent = ({ data }) => {

    const handleClick = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div className='RelatedReadComponent' key={data.id}>
            <div className='related-reads-text'>Related reads</div>
            <img src={data.img} alt="related-read-img" className='related-read-img' />
            <Link onClick={handleClick} to={`/category/${data.category}/${data.id}`}>
                <div className='related-read-title'>
                    {data.title.substring(0, 60)+"..."}
                    <p className='show-author-name'>{data.author}</p>
                </div>
            </Link>
            <AuthorDetailsComponent data={data} classStyle='written-by-hide' hidecomp='hide-author-comp' />
        </div>
    );
}

export default RelatedReadComponent;