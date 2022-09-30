import { useState, useEffect } from 'react'
// Components
import SalonList from './components/SalonList'
// App Styles

const App = () => {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchFromApi = async () => {
      setIsLoading(true)
      const response = await fetch('https://api.salon.com')
      const data = await response.json()
      console.log(data)
      setIsLoading(false)
    }
  }, [])

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (<SalonList />)}
    </>
  )
}

export default App
