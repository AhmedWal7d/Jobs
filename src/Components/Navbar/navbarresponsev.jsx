import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from '../Context/Context';
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import logo from "../../Img/logosvg.png";
import higth from "../../Img/user image.png";
import imgposition from "../../Img/Group 728.png";

// import higth from "../../Img/"
// import profilePic from "../../Img/profilePic.png"; // Add the path to your profile picture

export default function Navbarresponsev() {
    const location = useLocation();
    const { t } = useTranslation();
    const x = useContext(UserContext);
    const [language, setLanguage] = useState(i18n.language || 'en');
    const [mymode, setMymode] = useState(() => localStorage.getItem('theme') || 'light');

    const changeLanguage = (event) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
        setLanguage(selectedLanguage);
        localStorage.setItem('language', selectedLanguage);
    };

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [language]);

    const toggleTheme = () => {
        setMymode(prevMode => {
            const newMode = prevMode === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', newMode);
            return newMode;
        });
    };

    const darkTheme = createTheme({
        palette: {
            mode: mymode,
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <nav className="navbar bg-color navbar-expand-lg h-navbar">
                <div className="container-fluid d-flex align-items-center justify-content-between position-relative">

                    {/* Left Section - Profile & Welcome Text */}
                    <div className="d-flex align-items-center">
                        <p>
                            <img src={higth} alt="Profile" className="profileuser" />
                        </p>
                        <div className="welcome-text">
                            <img src={logo} alt="Profile" className="profile-pic" />

                        </div>
                    </div>


                    <div className="d-flex flex-column align-items-center mt-4">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span
                                className="navbar-toggler-icon d-block"
                                style={{
                                    backgroundImage:
                                        "url(\"data:image/svg+xml;charset=UTF8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='white' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")"
                                }}
                            ></span>
                        </button>
                        <div className='d-inline-block pt-5'>
                            <i className="fa-solid fa-bell fa-2x"></i>
                        </div>
                    </div>


                    <div className='position-absolute mt-2 mb-2 headerposition'>
                        <img src={imgposition} />
                    </div>


                    <div className="collapse navbar-collapse justify-content-center bg-color mt-hrader" id="navbarSupportedContent">
                        <ul className="navbar-nav mb mb-lg-0">
                            <li className="d-center nav-item mt-2 d-center">
                                <Link className={location.pathname === "/" ? "nav-link item-navbar fw-bold" : "nav-link"} to="/">
                                    {t("home")}
                                </Link>
                            </li>
                            <li className="d-center nav-item mt-2">
                                <Link className={location.pathname === "/about" ? "nav-link item-navbar fw-bold" : "nav-link"} to="/about">
                                    {t("aboutus")}
                                </Link>
                            </li>
                            <li className="d-center nav-item mt-2">
                                <Link className={location.pathname === "/services" ? "nav-link item-navbar fw-bold" : "nav-link"} to="/services">
                                    {t("services")}
                                </Link>
                            </li>
                            <li className="d-center nav-item mt-2">
                                <Link className={location.pathname === "/contact" ? "nav-link item-navbar fw-bold" : "nav-link"} to="/contact">
                                    {t("contactus")}
                                </Link>
                            </li>
                            <li className="d-center nav-item mt-2">
                                <Link className={location.pathname === "/faq" ? "nav-link item-navbar fw-bold" : "nav-link"} to="/faq">
                                    {t("faq")}
                                </Link>
                            </li>

                            <li className="d-center nav-item mt-2">

                                {/* Right Section */}
                                <div className="d-flex align-items-center">
                                    <select className="selectlag me-3" value={language} onChange={changeLanguage}>
                                        <option value="en">English</option>
                                        <option value="ar">العربية</option>
                                    </select>


                                </div>
                            </li>
                            <li className="d-center nav-item mt-2">
                                <div className="dropdown">
                                    <button
                                        className="btn bg-color dropdown-toggle"
                                        type="button"
                                        id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        الملف الشخصي
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end bg-color" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="#">الملف الشخصي</a></li>
                                        <li><a className="dropdown-item" href="#">تسجيل الخروج</a></li>
                                    </ul>
                                </div>
                            </li>

                        </ul>
                    </div>


                </div>
            </nav>
        </ThemeProvider>
    );
}
