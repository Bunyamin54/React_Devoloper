import BestillingList from "../components/BestillingList"
import FrivilligArbeid from "../components/FrivilligArbeid"

const Home = () => {
  return (
    <main className="text-center mt-2">
      <h1 className="display-9 text-danger">Hjerte Hender</h1>
      <FrivilligArbeid/>
      <BestillingList />
    </main>
  )
}

export default Home
