// npm modules
import { useState } from 'react'
import { Routes, Route, useNavigate} from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import Home from './pages/Home/Home'
import RecipesLanding from './pages/RecipesIngredients/RecipesLanding'
import LeftDashboard from './components/LeftDashboard/LeftDashboard'
// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'

// styles
import './App.css'
import './components/LeftDashboard/LeftDashboard.css'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <div className='home-container'>
      {user ? <LeftDashboard user={user} handleLogout={handleLogout}/>
      : <NavBar user={user} handleLogout={handleLogout} />
      }
      <Routes>
        {user ? <Route path='/' element={
            <ProtectedRoute user={user}>
              <Home user={user} />
            </ProtectedRoute>
          } /> : 
          <>
          <Route path="/" element={<Landing user={user} />} />
          <Route
            path="/signup"
            element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
          />
          <Route
          path="/login"
            element={<Login user={user} handleSignupOrLogin={handleSignupOrLogin} />}
          />
        </>
      }
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            </ProtectedRoute>
          }
        />
        <Route 
          path='/recipies'
          element={
            <ProtectedRoute user={user}>
              <RecipesLanding />
            </ProtectedRoute>
          } />
        <Route 
          path='/home'
          element={
            <ProtectedRoute user={user}>
              <Home user={user} />
            </ProtectedRoute>
          } />

      </Routes>
    </div>
  )
}

export default App
