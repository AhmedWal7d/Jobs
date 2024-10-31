  import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from '../Context/Context';
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';
import { createTheme, CssBaseline, ThemeProvider, Switch, FormControlLabel, FormGroup } from '@mui/material';
import logo from "../../Img/logosvg.png"

export default function Navbar() {

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
    <>

      <nav className="navbar bg-color navbar-expand-lg d-none d-lg-block">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Left Section */}
          <div className="d-flex align-items-center">
            <div className="w-imglogo"> {/* Set a max width */}
              <img src={logo} className="w-100" alt="Logo" />
            </div>

            {/* <Link className="navbar-brand me-3" to="#">
              <select value={language} onChange={changeLanguage}>
                <option value="en">English</option>
                <option value="ar">العربية</option>
              </select>
            </Link> */}
          </div>

          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">

              <li className="nav-item">
                <Link className={location.pathname === "/" ? "nav-link item-navbar fw-bold" : "nav-link"} to="/">{t("home")}</Link>
              </li>
              <li className="nav-item">
                <Link className={location.pathname === "/" ? "nav-link item-navbar fw-bold" : "nav-link"} to="/">{t("aboutus")}</Link>
              </li>
              <li className="nav-item">
                <Link className={location.pathname === "/" ? "nav-link item-navbar fw-bold" : "nav-link"} to="/">{t("services")}</Link>
              </li>
              <li className="nav-item">
                <Link className={location.pathname === "/" ? "nav-link item-navbar fw-bold" : "nav-link fw-bold"} to="/">{t("contactus")}</Link>
              </li>
              <li className="nav-item">
                <Link className={location.pathname === "/" ? "nav-link item-navbar fw-bold" : "nav-link"} to="/">{t("faq")}</Link>
              </li>
            </ul>
          </div>

          <div className="">
            <select className='selectlag' value={language} onChange={changeLanguage}>
              <option value="en">English</option>
              <option value="ar">العربية</option>
            </select>
            <form className="d-flex">
              <div className="dropdown border">
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
                  <li><a className="dropdown-item" href="#"> تسجيل الخروج </a></li>
                </ul>
              </div>
            </form>
          </div>

        </div>
      </nav>

    </>
  );
}
