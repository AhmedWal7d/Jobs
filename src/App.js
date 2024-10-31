import React, { useEffect, useState } from 'react';
import './App.css'; // تأكد من تضمين الأنماط الأساسية
import { RouterProvider } from 'react-router-dom';
import UserContextprovider from './Components/Context/Context';
import routers from './Components/Routes/routes';
import { Toaster } from 'react-hot-toast';
import { generateToken, messaging } from './firebase';
import { onMessage } from 'firebase/messaging';
import FirebaseContextProvider from './Components/Firbase/ContextFirbase';
import { createTheme, CssBaseline, ThemeProvider, Button } from '@mui/material';
import i18n from './i18n';
function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || i18n.language || 'en');
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

  useEffect(() => {
    generateToken();
    onMessage(messaging, (payload) => {
      console.log('Message received: ', payload);
    });
  }, []);



  const darkTheme = createTheme({
    palette: {
      mode: mymode,
    },
  });

  const toggleTheme = () => {
    setMymode(prevMode => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newMode);
      return newMode;
    });
  };

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        {/* <CssBaseline /> */}

        <FirebaseContextProvider>
          <UserContextprovider>
            <RouterProvider router={routers}></RouterProvider>
            <Toaster />
          </UserContextprovider>
        </FirebaseContextProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
