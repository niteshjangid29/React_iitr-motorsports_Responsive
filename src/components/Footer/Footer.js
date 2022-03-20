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
            <hr className='hr' />
            <div className="footer">
                <img src="./images/copyright-regular.svg" alt="copyright" />
                <p>Copyright <span>{currentYear}</span> | Team IIT Roorkee Motorsports | All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer
