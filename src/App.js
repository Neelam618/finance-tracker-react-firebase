import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import { Signup } from './pages/signup/Signup';
import Navbar from './components/Navbar'
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const { authIsReady, user } = useAuthContext()
  return (
    <div className="App">
      {authIsReady && (
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={(user && <Home />) || (!user && <Navigate to="/login" />)} />
            <Route path="/login" element={(!user && <Login />) || (user && <Navigate to="/" />)} />
            <Route path="/signup" element={(!user && <Signup />) || (user && <Navigate to="/" />)} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Router>
      )}
    </div >
  );
}

export default App
