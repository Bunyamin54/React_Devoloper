import React, { useEffect, useState } from 'react';
import {useLocation, useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import NotFound from './NotFound';
import spinner from "../img/Spinner-2.gif"

const PersonDetail = () => {
  // let {state:person} = useLocation()
  let navigate = useNavigate ();

  let {id} = useParams ();
  console.log ({id})

  const [person, setPerson] = useState({})
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)


  const getPerson = () => {
    axios(`https://reqres.in/api/users/${id}`)
      .then ((res) => setPerson(res.data.data))
      .catch ((err) => {
        setError(true)
        console.log (err);
      }).finally(() => setLoading(false))
    };

   useEffect(() => {

   getPerson();

   }, []);

   if (error) {
    return <NotFound/>
   }else if (loading) {
    return (

      <div className='text-center mt-4'> 

    <img src={spinner} alt="spinner" />

      </div>
    )
   }


  return (
    <div className="container text-center">
      <h3>
      {person?.first_name} {person?.last_name}
    </h3>
    <img className="rounded" src={person?.avatar} alt="" />
    <p>{person?.email}</p>
    <div>
      <button onClick={() => navigate("/")} className="btn btn-success me-2">
        Go Home
      </button>
      <button onClick={() => navigate(-1)} className="btn btn-warning">
        Go Back
      </button>
    </div>
    </div>
  );
};

export default PersonDetail;
