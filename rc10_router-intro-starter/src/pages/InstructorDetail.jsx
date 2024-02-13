import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const InstructorDetail = () => {

  let {id} = useParams()

  let location =useLocation



  return (
    <div className='p-3'>
      <p>

   from useParam: I'am instructor <spam className="text-danger fw-bolder" >{id} </spam>


      </p>
    </div>
  )
}

export default InstructorDetail
