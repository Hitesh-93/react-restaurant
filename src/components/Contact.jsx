import React from 'react'

const Contact = () => {
    return (
        <section className='contact' id='contact'>
            <h1 className='heading'>
                <span>Contact</span> Us
            </h1>
            <div className="row">
                <iframe
                    class="map"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11993.267641772954!2d-72.8480109!3d41.2802068!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x36c6fa619c4f5603!2sMcDonald&#39;s!5e0!3m2!1sen!2s!4v1633364807635!5m2!1sen!2s"
                    allowfullscreen=""
                    loading="lazy">
                </iframe>
                <form action="">
                    <h3>Get in touch</h3>
                    <div className="inputBox">
                        <span className='fas fa-user'></span>
                        <input type="text" placeholder='Name' />
                    </div>
                    <div className="inputBox">
                        <span className='fas fa-envelope'></span>
                        <input type="text" placeholder='Email Id' />
                    </div>
                    <div className="inputBox">
                        <span className='fas fa-phone'></span>
                        <input type="number" placeholder='Number' />
                    </div>
                    <input type="submit" value="Contact Us" className='btn' />
                </form>
            </div>
        </section>
    )
}

export default Contact