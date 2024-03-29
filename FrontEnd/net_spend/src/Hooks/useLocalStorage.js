import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      const item = JSON.stringify(value);
      window.localStorage.setItem(key, item);
    } catch (error) {
      console.log(error);
    }
  }, [key, value]);

  return [value, setValue];
};
