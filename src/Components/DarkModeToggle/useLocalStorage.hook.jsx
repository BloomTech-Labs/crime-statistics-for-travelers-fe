import { useState } from 'react'

const useLocalStorage = (key, initialValue) => {
  console.log('initial value from useLocalStorage hook', initialValue)
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) : initialValue;
  })
  const setValue = value => {
    console.log(value)
    window.localStorage.setItem(key, JSON.stringify(value));
    setStoredValue(value)
  }
  return [storedValue, setValue]
}

export default useLocalStorage;