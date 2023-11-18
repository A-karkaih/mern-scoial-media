import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import HomePage from './scenes/homePage';
import ProfilePage from './scenes/profilePage';
import LoginPage from './scenes/loginpage';
import NavBar from './scenes/navbar';
function App() {
  return (
    <div className="app">
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/profile/:userId' element={<ProfilePage />} />
    </Routes>
    
      </BrowserRouter>

    </div>
  );
}

export default App;
