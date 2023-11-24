import React from 'react'
import { review } from '../Data'
import quoteImg from '../assets/images/quote-img.png'


const Review = () => {
    return (
        <section className='review' id='review'>
            <h1 className='heading'>
                <span>Customer's</span> Review
            </h1>
            <div className="box-container">
                {
                    review.map((value, index) => {
                        return (
                            <div className="box">
                                <img src={quoteImg} alt="" className='quote' />
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ipsa saepe nobis.
                                    Eligendi fuga voluptatum, quas molestiae eius a libero vero ullam earum, labore nostrum?
                                </p>
                                <img src={value.img} alt="" className='user' />
                                <h3>John Doe</h3>
                                <div className="stars">
                                    <i className='fas fa-star' />
                                    <i className='fas fa-star' />
                                    <i className='fas fa-star' />
                                    <i className='fas fa-star' />
                                    <i className='fas fa-star-half-alt' />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Review