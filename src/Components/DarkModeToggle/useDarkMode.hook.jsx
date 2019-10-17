import{ useEffect } from 'react'

import useLocalStorage from './useLocalStorage.hook'

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);
  useEffect(() => {
      darkMode === true ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
  }, [darkMode])
  return [darkMode, setDarkMode]
}

export default useDarkMode