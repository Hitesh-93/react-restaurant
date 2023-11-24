import React from 'react'
import { blog } from '../Data'


const Blog = () => {
    return (
        <section className='blogs' id='blog'>
            <h1 className='heading'>
                <span>our</span> blog
            </h1>
            <div className="box-container">
                {
                    blog.map((item, index) => {
                        return (
                            <div className='box' key={index}>
                                <div className="image">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="content">
                                    <a href="#" className='title'>tasty and fresh spices</a>
                                    <span>by admin / 21 nov 2023</span>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Inventore fuga modi, tempora neque omnis fugiat!
                                    </p>
                                    <a href="" className='btn'>read  more</a>
                                </div>
                            </div>
                        )
                    })

                }
            </div>

        </section>
    )
}

export default Blog