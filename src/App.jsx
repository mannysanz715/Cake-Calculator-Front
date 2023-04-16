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
// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import LeftDashboard from './components/LeftDashboard/LeftDashboard'

// styles
import './App.css'
import './components/LeftDashboard/LeftDashboard.css'
import NewRecipe from './pages/NewRecipe/NewRecipe'
import RecipeBook from './pages/RecipeBook/RecipeBook'
import Ingredients from './pages/Ingredients/Ingredients'
import NewIngredient from './pages/NewIngredient/NewIngredient'

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
      {user ? 
        <LeftDashboard user={user} handleLogout={handleLogout}/>
        : 
        <NavBar user={user} handleLogout={handleLogout} />
      }
      <Routes className='Page-Content'>
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
          path='/recipes'
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
        <Route
          path='/Recipes/AddRecipe'
          element={
            <ProtectedRoute user={user}>
              <NewRecipe user={user}/>
            </ProtectedRoute>
          }
        />
        <Route
          path='/Recipes/Recipes'
          element={
            <ProtectedRoute user={user}>
              <RecipeBook user={user}/>
            </ProtectedRoute>
          }
        />
        <Route
          path='/Recipes/Ingredients'
          element={
            <ProtectedRoute user={user}>
              <Ingredients user={user}/>
            </ProtectedRoute>
          }
        />
        <Route
          path='/Recipes/Ingredients/New'
          element={
            <ProtectedRoute user={user}>
              <NewIngredient user={user}/>
            </ProtectedRoute>
          }
        />

      </Routes>
    </div>
  )
}

export default App
