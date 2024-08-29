
import 'bootstrap/dist/css/bootstrap.min.css';
import Pessoas from '../componets/pessoas/pessoas';
import 'bootstrap';
import { BrowserRouter, Router, Route } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
export default function Chats() {

    const navigate = useNavigate(); 
  return (
    <div> 
        <Pessoas> </Pessoas>
    </div>
        
      );
}

