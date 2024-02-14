import React from 'react'
import { useLocation } from 'react-router-dom'

const PersonDetail = () => {
let {state} = useLocation()
console.log(state)
  return (
    <div>
      PersonDetail
    </div>
  )
}

export default PersonDetail
