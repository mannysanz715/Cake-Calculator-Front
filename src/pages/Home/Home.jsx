import LeftDashboard from "../../components/LeftDashboard/LeftDashboard"
import { Routes, Route } from "react-router-dom"
import './Home.css'
import RecipesLanding from "../RecipesIngredients/RecipesLanding"
const Home = ({user, handleLogout, comp}) => {
  console.log(comp)
  return (
    <div className="home-container">
      <h1>Home</h1>
    </div>
)
}

export default Home