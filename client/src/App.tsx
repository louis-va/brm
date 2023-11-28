import { useState, useEffect } from 'react'
const API_URL = import.meta.env.VITE_API_URL

function App() {
  const [message, setMessage] = useState("")

  useEffect(() => {
    function getMenuItems() {
      fetch(API_URL + '/api/test', {method: 'GET'})
        .then(response => response.json())
        .then(data => {setMessage(data.data)})
        .catch(() => {setMessage("Not connected to the server.")})
    }

		getMenuItems()
  }, [])

  return (
    <>
      <h1>Hey!</h1>
      <p>{message}</p>
    </>
  )
}

export default App