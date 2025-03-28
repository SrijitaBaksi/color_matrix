import { useState } from 'react'

import './App.css'
import Matrix from './components/Matrix'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Matrix/>
  )
}

export default App
