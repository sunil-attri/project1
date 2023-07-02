import React,{useEffect} from 'react';
// import { useNavigate } from 'react-router-dom';

const Admininfo = () => {

  useEffect(() => {
    const token = sessionStorage.getItem('loginID');

    if (!token) {
      // Redirect to login page
      window.location.href = '/login';
    }
  }, []);

  // const navigate=useNavigate()
  // const token=sessionStorage.getItem("loginID")
  // console.log(token);

  // if(!token){
  //     window.location.href='/login'
  //   // navigate("/login")
  // }

  return ( 
    <div>
      <h1>Name : </h1>
      <h1>admin id : </h1>
      <h4>Pending Applications </h4>
      <img src='' alt='admin'></img>
    </div>
  );
};

export default Admininfo;
