import React from 'react'
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div>
            <div className='social-media'>
                <div className='container'>
                    <h2>Our Social Media</h2>
                    <div className='social-logo'>
                        <ul>
                            <li>
                                <a href='https://www.youtube.com/'><img src='./images/youtube-brands.svg' alt='youtube' draggable="false" /></a>
                            </li>
                            <li>
                                <a href='https://www.instagram.com/nitesh_2_9/'><img src='./images/instagram-brands.svg' alt='instagram' draggable="false" /></a>
                            </li>
                            <li>
                                <a href='https://www.facebook.com/people/Nitesh-Jangid/100059126799170/'><img src='./images/facebook-f-brands.svg' alt='facebook' draggable="false" /></a>
                            </li>
                            <li>
                                <a href='https://www.twitter.com/nitesh_2_9/'><img src='./images/twitter-brands.svg' alt='twitter' draggable="false" /></a>
                            </li>
                            <li>
                                <a href='https://www.linkedin.com/in/nitesh-jangid-bb6673205/'><img src='./images/linkedin-in-brands.svg' alt='linkedin' draggable="false" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="contact-details">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="./images/logo.svg" alt="logo" className='car-logo' />
                            <h1>Contact Us</h1>
                            <div className="contacts">
                                <div className="contact">
                                    <img src="./images/email.svg" alt="email" />
                                    <a href="mailto:iitrms@iitr.ac.in">iitrms@iitr.ac.in</a>
                                </div>
                                <div className="contact">
                                    <img src="./images/phone.svg" alt="phone" />
                                    <a href="tel:+919971655442">+91 99716 55442</a>
                                </div>
                                <div className="contact">
                                    <img src="./images/location.svg" alt="location" />
                                    <div className='location'>
                                        <a href="#">Mechanical & Industrial Engineering Department, IIT Roorkee, Uttarakhand, India. Pin: 247667</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="map mt-4 mt-md-0">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3459.9905142304788!2d77.89154555035954!3d29.864547402112734!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb370034da91d%3A0xdb6ef5c088e1ccc0!2sIIT%20Roorkee%20Motorsports!5e0!3m2!1sen!2sin!4v1647860283460!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" title='IITR Motorsports'></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='hr' />
            <div className="footer">
                <img src="./images/copyright-regular.svg" alt="copyright" draggable="false" />
                <p>Copyright <span>{currentYear}</span> | Team IIT Roorkee Motorsports | All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer
