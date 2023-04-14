import './LeftDashboard.css'
import { Link } from 'react-router-dom'
const LeftDashboard = ({user, handleLogout}) => {
  return (
    <div className='left-dashboard-container'>
      <h3 className='title'>Cakers Assistant</h3>
      <div className='left-nav'>
        <ul className='inner-nav top-nav'>
          <li className='dash-items'><Link to='/home'><img className='dash-icon' src='/assets/navIcons/home.png' alt='' />Dashboard</Link></li>
          <li className='dash-items'><img className='dash-icon' src='/assets/navIcons/clipboard.png' alt=''/>Orders & Quotes</li>
          <li className='dash-items'><img className='dash-icon' alt='' src='/assets/navIcons/contacts.png'/>Contact</li>
          <li className='dash-items'><img className='dash-icon' alt='' src='/assets/navIcons/calendar.png'/>Calendars</li>
          <li className='dash-items'><Link to='/recipes'><img className='dash-icon' alt='' src='/assets/navIcons/recipes.png'/>Recipes & Ingredients </Link>
          </li>
          <li className='dash-items'><img className='dash-icon' alt='' src='/assets/navIcons/products.png'/>Products</li>
          <li className='dash-items'><img className='dash-icon' alt='' src='/assets/navIcons/reports.png'/>Reports & Lists</li>
          <li className='dash-items'><img className='dash-icon' alt='' src='/assets/navIcons/business.png'/>Business & Expenses</li>
          <li className='dash-items'><img className='dash-icon' alt='' src='/assets/navIcons/printer.png'/>Printables</li>
        </ul>
        <ul className='inner-nav bottom-nav'>
          <li className='dash-items'><img className='dash-icon' alt='' src='/assets/navIcons/account.png'/>Account</li>
          <li className='dash-items'><img className='dash-icon' alt='' src='/assets/navIcons/settings.png'/>Settings</li>
          <li className='dash-items'><img className='dash-icon' alt='' src='/assets/navIcons/logoff.png'/><Link to="/" onClick={handleLogout}>Log </Link></li>
        </ul>
      </div>
    </div>
)
}

export default LeftDashboard