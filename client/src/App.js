import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DetailsArticle from './pages/DetailsArticle';
import AdminInterface from './pages/AdminInterface';
import LoginAdmin from './pages/LoginAdmin';
import UserInterface from './pages/UserInterface';
import LoginRegistration from './pages/LoginRegistration';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<DetailsArticle />} />
        <Route path="/admininterface" element={<AdminInterface />} />
        <Route path="/loginadmin" element={<LoginAdmin />} />
        <Route path="/login" element={<LoginRegistration />} />
        <Route path="/profile" element={<UserInterface />} />
      </Routes>
    </div>
  );
}

export default App;
