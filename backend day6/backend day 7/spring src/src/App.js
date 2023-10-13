import React from 'react';
import LoginSignUp from './pages/Login';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Diet from './pages/Diet';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      {/* <Route path='/' element={<Navbar/>}> */}
      <Route path='/' element={<LoginSignUp/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Diet' element={<Diet/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
     
      {/* </Route>  */}
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
/*908862013932-dvoi10m4ouo7j42cpam04vvult9rr6fb.apps.googleusercontent.com*/