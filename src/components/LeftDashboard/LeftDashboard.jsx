import './LeftDashboard.css'
import { Link } from 'react-router-dom'

const LeftDashboard = ({user, handleLogout}) => {
  return (
    <>
      <h3>Cake Calculator : {user.name}</h3>
      <div className='left-nav'>
        <ul className='inner-nav top-nav'>
          <li>Dashboard</li>
          <li>Orders & Quotes</li>
          <li>Contact</li>
          <li>Calendars</li>
          <li>Recipies & Ingredients</li>
          <li>Products</li>
          <li>Reports & Lists</li>
          <li>Business & Expenses</li>
          <li>Printables</li>
        </ul>
        <ul className='inner-nav bottom-nav'>
          <li>Account</li>
          <li>Settings</li>
          <li><Link to="/" onClick={handleLogout}>LOG OUT</Link></li>
        </ul>
      </div>
    </>
)
}

export default LeftDashboard