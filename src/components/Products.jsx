import React from 'react'
import { product } from '../Data'

const Products = () => {
    return (
        <section className='products' id='products'>
            <h1 className='heading'>
                Our<span> Products</span>
            </h1>
            <div className="box-container">
                {
                    product.map((item, index) => {
                        return (
                            <div className="box" key={index}>
                                <div className="image">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="icons">
                                    <a href='#' className='fas fa-shopping-cart'></a>
                                    <a href='#' className='fas fa-heart'></a>
                                    <a href='#' className='fas fa-eye'></a>
                                </div>
                                <div className="content">
                                    <h3>fresh ice-cream</h3>
                                    <div className="stars">
                                        <i className='fas fa-star' />
                                        <i className='fas fa-star' />
                                        <i className='fas fa-star' />
                                        <i className='fas fa-star' />
                                        <i className='fas fa-star' />
                                        <i className='fas fa-star-half-alt' />
                                    </div>
                                    <div className="price">
                                        &#8377;50 <span>5</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Products