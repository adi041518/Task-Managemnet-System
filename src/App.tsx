
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './pages/signup';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

      </Routes>
            <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false} 
        closeOnClick
        pauseOnHover
        draggable
      />
    </>
  )
}

export default App
