import { useEffect, useState } from 'react';
import Homepage from './utils/home';
import LoginPage from './utils/login';
import StatusPage from './utils/status';
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  const [token,setToken]=useState(undefined)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/:id" element={<Homepage />}/>
      <Route exact path="/login" element={<LoginPage handleToken={setToken} />}/>
      {token &&
      <Route exact path="/status" element={<StatusPage />}/>}
      <Route exact path="/" element={<Homepage />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
