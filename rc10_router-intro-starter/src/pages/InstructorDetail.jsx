import React from 'react'
import { useParams } from 'react-router-dom'

const InstructorDetail = () => {

  let {id} = useParams()
  console.log(id)
  return (
    <div className='p-3'>
      InstructorDetail
    </div>
  )
}

export default InstructorDetail
