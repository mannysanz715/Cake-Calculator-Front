import { Navigate } from 'react-router-dom'
import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      {user ? Navigate('/home') : 
      <h1>Hello, Log in to use the App</h1>
      }
    </main>
  )
}

export default Landing
