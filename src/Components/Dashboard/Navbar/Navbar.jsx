import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import i18n from '../../../i18n';
import { CssBaseline, FormControlLabel, FormGroup, Switch } from '@mui/material';

export default function Navbar({ toggleSidebar }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [language, setLanguage] = useState(i18n.language || 'en');
  const [mymode, setMymode] = useState(() => localStorage.getItem('theme') || 'light');

  const handleToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
    toggleSidebar();
  };

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
      document.body.classList.toggle('dark-mode', newMode === 'dark'); // Toggle dark mode class on body
      return newMode;
    });
  };

  useEffect(() => {
    // Apply the saved theme mode on initial load
    if (mymode === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [mymode]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            <h1>{i18n.t('welcome')}</h1>
            <select value={language} onChange={changeLanguage}>
              <option value="en">English</option>
              <option value="ar">العربية</option>
            </select>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto d-flex justify-content-center w-100 mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <CssBaseline />
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={mymode === 'dark'}
                      onChange={toggleTheme}
                      name="themeMode"
                      color="default"
                    />
                  }
                  label={mymode === 'light' ? 'Light Mode' : 'Dark Mode'}
                />
              </FormGroup>
              <i
                className={`fa-solid ${isSidebarOpen ? 'fa-times' : 'fa-bars'} font-23`}
                onClick={handleToggle}
                style={{ cursor: 'pointer' }}
              ></i>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
