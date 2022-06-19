import React from 'react';
// import BlogData from '../../BlogData';
import { Link } from 'react-router-dom';

const CarosuelComponent = ({ blogData }) => {
    return (
        <div id="CarouselComponent" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
            </div>
            <div className="carousel-inner">
                {
                    blogData.filter(blog => blog.id === 15).map((data, index) => (
                        <div className="carousel-item" key={index}>
                            <img src={data.img} alt="Slide1"  className="d-block w-100" />
                            <div className="carousel-caption">
                                <Link to={`/category/${data.category}/${data.id}`}><h3>{data.title}</h3></Link>
                                <p>{data.category} / {data.date}</p>
                            </div>
                        </div>
                    ))
                }

                {
                    blogData.filter(blog => blog.id === 14).map((data, index) => (
                        <div className="carousel-item" key={index}>
                            <img src={data.img} alt="Slide2"  className="d-block w-100" />
                            <div className="carousel-caption">
                                <Link to={`/category/${data.category}/${data.id}`}><h3>{data.title}</h3></Link>
                                <p>{data.category} / {data.date}</p>
                            </div>
                        </div>
                    ))
                }

                {
                    blogData.filter(blog => blog.id === 41).map((data, index) => (
                        <div className="carousel-item active" key={index}>
                            <img src={data.img} alt="Slide3"  className="d-block w-100" />
                            <div className="carousel-caption">
                                <Link to={`/category/${data.category}/${data.id}`}><h3>{data.title}</h3></Link>
                                <p>{data.category} / {data.date}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#CarouselComponent" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#CarouselComponent" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
            </button>
        </div>
    )
}

export default CarosuelComponent;