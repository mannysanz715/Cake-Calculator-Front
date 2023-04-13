import LeftDashboard from "../../components/LeftDashboard/LeftDashboard"
import { Routes, Route } from "react-router-dom"
import './Home.css'
const Home = ({user, handleLogout}) => {
  return (
    <div className="home-container">
      <LeftDashboard className='left-dash' user={user} handleLogout={handleLogout} />
      <Routes>
        {/* <Route path='' element={} /> */}

      </Routes>
    </div>
)
}

export default Home