import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Create from './Pages/Create';
import { AuthContext ,FirebaseContext} from './store/Context';
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const {setUser} = useContext(AuthContext)

  useEffect(() => {
    const auth = getAuth(); 
  
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
      }
    });
  });
 
  return (
    <div>
      <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/create' element={<Create />} />
      
      </Routes>
      </Router>
    </div>
  );
}

export default App;
