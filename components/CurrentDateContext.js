import React, { createContext, useState, useEffect } from 'react';

export const CurrentDateContext = createContext({});

export const CurrentDateProvider = ({ children }) => {
    const [currentDateObject, setCurrentDateObject] = useState(new Date());
    
    useEffect(() => {
        let secTimer = setInterval( () => {
            setCurrentDateObject(new Date())
          },60000)
      
          return () => clearInterval(secTimer);
    }, [])

    return (
      <CurrentDateContext.Provider value={{ currentDateObject, setCurrentDateObject }}>
        {children}
      </CurrentDateContext.Provider>
    );
  };
