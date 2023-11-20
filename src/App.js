import React, {useEffect} from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import HomeScreen from './pages/HomeScreen';
import Login from './pages/Login';
import Profile from './pages/Profile';
import { auth } from './firebase';
import { useDispatch, useSelector } from "react-redux"
import { login, logout, selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
       
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
      } else {
        dispatch(logout());

      }
    })
    return unsubscribe;
  }, []);

  return (
    <div className="app">
      
     
      <Router>
      {!user ? (
        <Login />
      ) : ( 

        <Routes>
        <Route path="/" element={<HomeScreen />}/>
        <Route path="/profile" element={<Profile/>}/>
        
          
      </Routes>
        )}
    </Router>
    </div>
  );
}

export default App;
