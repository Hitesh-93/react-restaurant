import React, { useRef } from 'react'
import Logo from '../assets/images/logo.png'
import { cart } from '../Data'



const Navbar = () => {

    const cartRef = useRef()
    const navRef = useRef()
    const searchRef = useRef()

    const searchHandeler = () => {
        searchRef.current.classList.toggle('active')
        navRef.current.classList.remove('active')
        cartRef.current.classList.remove('active')
    }
    const cartHandeler = () => {
        cartRef.current.classList.toggle('active')
        searchRef.current.classList.remove('active')
        navRef.current.classList.remove('active')
    }
    const navHandeler = () => {
        navRef.current.classList.toggle('active')
        searchRef.current.classList.remove('active')
        cartRef.current.classList.remove('active')
    }


    return (
        <>
            <header className='header'>
                <a href="/" className='logo'>
                    <img src={Logo} alt="" />
                </a>
                <nav className='navbar' ref={navRef}>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#menu">Menu</a>
                    <a href="#products">Products</a>
                    <a href="#review">Review</a>
                    <a href="#contact">Contact</a>
                    <a href="#blog">Blog</a>
                </nav>
                <div className='icons'>
                    <div className='fas fa-search' onClick={searchHandeler}></div>
                    <div className='fas fa-shopping-cart' onClick={cartHandeler} ></div>
                    <div className='fas fa-bars' id='menu-btn' onClick={navHandeler}></div>
                </div>
                <div className='search-form' ref={searchRef}>
                    <input type="search" placeholder='search here...' id="search-box" />
                    <label htmlFor="search-box" className='fas fa-search'></label>
                </div>
                <div className="cart-items-container" ref={cartRef} >
                    {
                        cart.map((item, index) => {
                            return (
                                <div className="cart-item" key={index}>
                                    <span className='fas fa-times'></span>
                                    <img src={item.img} alt="" />
                                    <div className="content">
                                        <h3>cart item 0{index + 1}</h3>
                                        <div className='price'>${item.price}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <a className='btn' href='/'>Checkout</a>
                </div>
            </header>
        </>
    )
}

export default Navbar