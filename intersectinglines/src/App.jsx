import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Intercecting from './pages/excercises'

function App(){

  return(
    <Router>
      <Routes>
        <Route path='/' element={<Intercecting/>}></Route>
      </Routes>
    </Router>

  )
}
export default App
