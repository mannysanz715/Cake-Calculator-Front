import LeftDashboard from "../../components/LeftDashboard/LeftDashboard"

const Home = ({user, handleLogout}) => {
  return (
    <>
      <h1>Welcome Home</h1>
      <LeftDashboard user={user} handleLogout={handleLogout} />
    </>
)
}

export default Home