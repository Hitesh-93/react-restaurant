import React from 'react'

const Footer = () => {
    return (
        <section className='footer'>
            <div className="share">
                <a href="" className='fab fa-facebook'></a>
                <a href="" className='fab fa-instagram'></a>
                <a href="" className='fab fa-twitter'></a>
                <a href="" className='fab fa-pinterest'></a>
                <a href="" className='fab fa-linkedin'></a>
            </div>
            <div className="links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#menu">Menu</a>
                <a href="#products">Products</a>
                <a href="#review">Review</a>
                <a href="#contact">Contact</a>
                <a href="#blog">Blog</a>
            </div>
            <div className="credit">
                &copy; 2023 | created by <span>Hitesh</span>
            </div>

        </section>
    )
}

export default Footer