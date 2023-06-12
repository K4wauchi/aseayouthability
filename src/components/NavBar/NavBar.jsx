import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <>
            <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={'logo'} alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link
                                href="#home"
                                className={
                                    activeLink === 'home'
                                        ? 'active navbar-link'
                                        : 'navbar-link'
                                }
                                onClick={() => onUpdateActiveLink('home')}
                            >
                                Home
                            </Nav.Link>
                            <Nav.Link
                                href="#Program"
                                className={
                                    activeLink === 'program'
                                        ? 'active navbar-link'
                                        : 'navbar-link'
                                }
                                onClick={() => onUpdateActiveLink('program')}
                            >
                                Program
                            </Nav.Link>
                            <Nav.Link
                                href="#Donation"
                                className={
                                    activeLink === 'donation'
                                        ? 'active navbar-link'
                                        : 'navbar-link'
                                }
                                onClick={() => onUpdateActiveLink('donation')}
                            >
                                Donation
                            </Nav.Link>
                        </Nav>
                        <span className="navbar-text">
                            <div className="social-icon">
                                <a href="">
                                    <img src={'icon1'} alt="" />
                                </a>
                                <a href="">
                                    <img src={'icon2'} alt="" />
                                </a>
                                <a href="">
                                    <img src={'icon3'} alt="" />
                                </a>
                            </div>
                            <button
                                className="vvd"
                                onClick={() => console.log('connect')}
                            >
                                <span>Contact Us</span>
                            </button>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;
