import {useNavigate} from 'react-router-dom';
import Admininfo from './admin';
import React,{useEffect, useState} from 'react';
const token = sessionStorage.getItem('loginID');


const StatusPage = async() => {
  
  const [name,setName]=useState('')
  const [adminId,setAdminId]=useState('')
  const [applications,setApplications]=useState(0)

  const token = sessionStorage.getItem('loginID');
  console.log(token);
  if (!token) {
    // Redirect to login page
    window.location.href = '/login';
  }
  else{
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token:token })
    }
    const res=await fetch("http://127.0.0.1:3002/status",requestOptions)
    const ans=await res.json()
    console.log(ans);
  }
  
  // const navigate=useNavigate()

  // useEffect(() => {

  //   if (!token) {
  //     // Redirect to login page
  //     window.location.href="/login"
  //     // navigate('/login')
  //   }
  // });


  const data = [
    { applicationNumber: 'A001', name: 'John Doe', status: 'Pending' },
    { applicationNumber: 'A002', name: 'Jane Smith', status: 'Approved' },
    { applicationNumber: 'A003', name: 'Bob Johnson', status: 'Rejected' },
  ];

  return (
    <div>
    <h1>Name : {name}</h1>
    <h1>admin id : {adminId}</h1>
    <h4>Pending Applications </h4>
    <h4>{applications}</h4>
    <img src='' alt='admin'></img>
    <table>
      <thead>
        <tr>
          <th>Application Number</th>
          <th>Name</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.applicationNumber}>
            <td>{item.applicationNumber}</td>
            <td>{item.name}</td>
            <td>{item.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default StatusPage;
