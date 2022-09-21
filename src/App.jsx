import { useState } from 'react'
import {RoutesJS} from '../src/router'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <RoutesJS/>
    </div>
  )
}

export default App
