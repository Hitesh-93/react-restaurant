import React from 'react'
import AboutImg from '../assets/images/about-img.jpeg'


const About = () => {
    return (
        <>
            <section className='about' id='about'>
                <h1 className='heading'>
                    <span>about</span> us
                </h1>
                <div className="row">
                    <div className="image">
                        <img src={AboutImg} alt="" />
                    </div>
                    <div className="content">
                        <h3>Good Food <span>Good Helth</span></h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Optio magni, laboriosam soluta voluptate sint id.
                            Molestias, deserunt distinctio? Nesciunt, nostrum.
                        </p>
                        <p>Aperiam nesciunt sunt dolor sed at aspernatur quibusdam,
                            ducimus suscipit eveniet aut eum ab debitis temporibus? Adipisci, beatae tempora.
                            Temporibus sit deleniti consequatur!
                        </p>
                        <a className='btn' href="/">know more</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About