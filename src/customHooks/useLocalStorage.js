import { useState, useEffect } from 'react';

/**
 * Custom hook to manage localStorage with React state synchronization.
 *
 * @param {string} key - The key under which the value is stored in localStorage.
 * @param {*} initialValue - The initial value if nothing is found in localStorage.
 * @returns {[any, Function]} - Returns the stored value and a function to update it.
 */
function useLocalStorage(key, initialValue) {
  // Retrieve stored value or use initialValue
  const getStoredValue = () => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState(getStoredValue);

  // Function to update localStorage and state
  const setValue = (value) => {
    try {
      // Allow function updates like useState
      const valueToStore = typeof value === 'function' ? value(storedValue) : value;

      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  // Sync state when localStorage changes (including across tabs)
  useEffect(() => {
    const handleStorageChange = (event) => {
      console.log(event);
      if (event.key === key) {
        setStoredValue(event.newValue ? JSON.parse(event.newValue) : initialValue);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [key, initialValue]);

  return [storedValue, setValue];
}

export default useLocalStorage;
