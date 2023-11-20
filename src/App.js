import React, {useEffect} from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import HomeScreen from './pages/HomeScreen';
import Login from './pages/Login';
import { auth } from './firebase';
import { Unsubscribe } from '@mui/icons-material';
function App() {
  const user = null;
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        console.log(userAuth)

      } else {

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
          
      </Routes>
        )}
    </Router>
    </div>
  );
}

export default App;
