import { useState } from "react"
import BestillingList from "../components/BestillingList"
import FrivilligArbeid from "../components/FrivilligArbeid"
import {bestillingData} from "../helper/data"

const Home = () => {
    const [bestillings, setBestillings] =useState(bestillingData)

  return (
    <main className="text-center mt-2">
      <h1 className="display-8 text-danger">Hjerte Hender</h1>
      <FrivilligArbeid apps={bestillings} setApps={setBestillings} />
      <BestillingList apps={bestillings} setApps={setBestillings} />
    </main>
  )
}

export default Home
