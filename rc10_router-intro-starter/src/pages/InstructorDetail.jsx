import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const InstructorDetail = () => {

  let {id} = useParams()

  let {state, pathname} = useLocation()

  return (
    <div className='p-3'>
      <p>

   from useParam: I'am instructor  <spam className="text-danger fw-bolder">{id}</spam>
      </p>
      <p>

   from useLocation: I'am instructor <spam className="text-danger fw-bolder" >{state?.name} </spam>


      </p>

      <p>Our path is: {pathname} </p>
    </div>
  )
}

export default InstructorDetail
