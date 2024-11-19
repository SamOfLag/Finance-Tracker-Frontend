import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignupPage from './Pages/SignupPage'

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/signup' element={<SignupPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;