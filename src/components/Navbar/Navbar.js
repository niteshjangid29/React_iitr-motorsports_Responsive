import React, { useState } from 'react'
import './Navbar.css';
import { Container, Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Navbars = () => {

    const [navbarBg, setNavbarBg] = useState(false);
    const [navColor, setNavColor] = useState(false);
    const [imgColor, setImgColor] = useState(false);

    var scroll_topBtn = document.getElementById('scroll_top');

    function topFunction() {
        document.body.scrollTop = 0;  // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }


    const changeBackground = () => {
        if (window.scrollY >= 20) {
            setNavbarBg(true);
            setNavColor(true);
            setImgColor(true);
            scroll_topBtn.style.display = "block";
        }
        else {
            setNavbarBg(false);
            setNavColor(false);
            setImgColor(false);
            scroll_topBtn.style.display = "none";
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <div>
            <div className='myNav'>
                <Navbar collapseOnSelect expand="md" bg='white' variant="dark" fixed='top' className={navbarBg ? "nav_bg active" : "nav_bg"}>
                    <Container className='nav_container'>
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <div className='navbar_logo'>
                                <img src='./images/logo.svg' className={imgColor ? "" : "nav_img"} draggable='false' alt='Logo' />
                                <h1 className={navColor ? "d-md-none d-lg-block d-sm-block d-none activeColor" : "d-md-none d-lg-block d-sm-block d-none"}>IITR Motorsports</h1>
                            </div>
                        </Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end nav_collapse'>
                            <Nav>
                                <Link className={navColor ? "nav_item activeColor" : "nav_item"} to='/'>Home</Link>
                                <Link className={navColor ? "nav_item activeColor" : "nav_item"} to='/about-us'>About Us</Link>
                                <Link className={navColor ? "nav_item activeColor" : "nav_item"} to='/cars'>Cars</Link>
                                <Link className={navColor ? "nav_item activeColor" : "nav_item"} to='/sponsors'>Sponsors</Link>
                                <Link className={navColor ? "nav_item activeColor" : "nav_item"} to='/team'>Team</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <button id="scroll_top" onClick={topFunction}>
                    <img src="./images/arrow-up-solid.svg" alt='arrow-top' draggable="false" />
                </button>
            </div>
        </div>
    )
}

export default Navbars
