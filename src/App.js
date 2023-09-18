import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Resturant from './Component/Basic/Resturant';
import Signup from './Signup/Signup';
import Settings from './Settings/Set';
import Register from './register/Register';
import "./App.css"
  

    function App()
{
   const user=true;
    return (
    <Router>
<div class="topnav">
  <a class="active" href="#Login"> <Link to="/">Login</Link></a>
  <a href="#Login"><Link to="/Home">Home</Link></a>
  <a href="#Register"><Link to="/Register">Register</Link></a>
  <a href="#Settings"><Link to="/Setting"><i className="fa-solid fa-gear fa"></i></Link></a>
</div>

 
        <Routes>
                <Route exact path='/' element={< Signup/>}></Route>
                <Route path='/Home' element={user ?<Resturant/>:<Register/>}></Route>
                <Route path='/Register' element={user ? <Signup/> :< Register/>}></Route>
                <Route path='/Setting' element={<Settings />}></Route>

        </Routes>
        
    </Router>
);
}
  
export default App;