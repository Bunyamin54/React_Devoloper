import AppointmentList from "../components/AppointmentList"
import Doctors from "../components/FrivilligArbeid"

const Home = () => {
  return (
    <main className="text-center mt-2">
      <h1 className="display-9 text-danger">HjerteHender</h1>
      <Doctors />
      <BestillingList />
    </main>
  )
}

export default Home
