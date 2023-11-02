// import logo from './logo.svg';
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
        <Route path="DetailsArticle" element={<DetailsArticle />} />
        <Route path="AdminInterface" element={<AdminInterface />} />
        <Route path="LoginAdmin" element={<LoginAdmin />} />
        <Route path="LoginRegistration" element={<LoginRegistration />} />
        <Route path="UserInterface" element={<UserInterface />} />
      </Routes>
    </div>
  );
}

export default App;
