import React from 'react';

const User = () => {


  let userData ="deneme"  //! global degiskene aktariyoruz bu sekilde degisken yazarak
   // ? Klasik fetch yapisi

  fetch ('https://randomuser.me/api/') // ! istek atiyoruz
    .then (res => res.json ()) //! veriyi jsonlastiryoruz
    .then (data => console.log (userData=data))  //! catch blogu atip error de verdirebilriz
    .catch (err => console.log (err));
  console.log(userData)
  return (
    <div>

      <img src="" alt="" />

      <h4>Hei, My Name is</h4>
      <h1>Name</h1>
      <h3>Email</h3>
      <h4>dob</h4>
      <h5>phone</h5>
      <h6>address</h6>

      User

    </div>
  );
};

export default User;

// import React, { useEffect, useState } from "react"

// const User = () => {
//   // let userData = "deneme"

//   const [userData, setUserData] = useState()

//   const getUser = () => {
//     fetch("https://randomuser.me/api")
//       .then((res) => res.json())
//       .then((data) => setUserData(data.results[0]))
//       .catch((err) => console.log(err))
//   }

//   useEffect(() => {
//     // fetch("https://randomuser.me/api")
//     //   .then((res) => res.json())
//     //   .then((data) => setUserData(data.results[0]))
//     //   .catch((err) => console.log(err))
//     //! ComponentDidMount
//     const timer = setInterval(getUser, 3000)
//     getUser()

//     //! ComponentWillUnMount
//     return () => {
//       clearInterval(timer)
//     }
//   }, [])

//   console.log(userData)
//   return (
//     <div>
//       {/* Optional Chaining */}
//       <img src={userData?.picture?.large} className="rounded-circle" alt="" />
//       <h4>Hi, My Name is</h4>
//       <h1>
//         {userData?.name?.first} {userData?.name?.last}
//       </h1>
//       <h3>{userData?.email}</h3>
//       <h4>{new Date(userData?.dob?.date).toLocaleDateString()}</h4>
//       <h5>{userData?.phone}</h5>
//       <h6>{userData?.location?.city}</h6>

//       <button className="btn btn-success" onClick={getUser}>
//         Get Random User
//       </button>
//     </div>
//   )
// }

// export default User
