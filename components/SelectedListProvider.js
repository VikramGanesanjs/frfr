import React, { useState, createContext} from 'react';

export const SelectedListContext = createContext({})

export const SelectedListProvider = ({ children }) => {
    const [selectedList, setSelectedList] = useState('');
  
    return (
      <SelectedListContext.Provider value={{ selectedList, setSelectedList }}>
        {children}
      </SelectedListContext.Provider>
    );
  };
