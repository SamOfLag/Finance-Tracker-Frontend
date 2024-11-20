import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignupPage from './Pages/SignupPage'
import SigninPage from './Pages/SigninPage'

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/signup' element={<SignupPage/>}/>
          <Route path='/signin' element={<SigninPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;