
import 'bootstrap/dist/css/bootstrap.min.css';
import Pessoas from "./componets/pessoas/pessoas";
import 'bootstrap';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import Welcome from './pages/welcome';
import Chats from './pages/Chats';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/chats" element={<Chats />} />
      
      </Routes>

  </BrowserRouter>
  );
}

export default App;
