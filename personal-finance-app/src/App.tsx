import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignupPage from './Pages/SignupPage'
import SigninPage from './Pages/SigninPage'
import DashboardPage from './Pages/Dashboard/DashboardPage'
import PrivateRoute from './Components/PrivateRoute'

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<SignupPage/>}/>
          <Route path='/signin' element={<SigninPage/>}/>
          <Route path='/dashboard' element={
            // <PrivateRoute>
            <DashboardPage/>
            // </PrivateRoute>
            }/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;