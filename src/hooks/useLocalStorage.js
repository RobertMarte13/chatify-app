import { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
  const [storadValue, setStoradValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (err) {
      console.log(err)
      return initialValue
    }
  }
  )

  const setValue = (value) => {
    try {
      setStoradValue(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (err) {
      console.log(err)
      return initialValue
    }
  }

  return [storadValue, setValue]
}