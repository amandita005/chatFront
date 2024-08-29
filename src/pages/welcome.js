
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap';
import { BrowserRouter, Router, Route } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
export default function Welcome() {

    const navigate = useNavigate();


      
  return (
        <div className="" style={{display: "flex", width: window.innerWidth, height: "700px",
            backgroundColor: "#332e4f", 
            overflow: "hidden"}}>

          <div className="loginLeft" style={{flex: 1, backgroundColor: "#2c2749",  display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h1 className="loginTitle" style={{
          color: '#ffffff',
          fontSize: '50px',
          fontWeight: 'bold',
          margin: 0,
        }}>CHATINFO</h1>
            <p className="login-subtitle" style={{
          color: '#d3d3d3',
          fontSize: '14px',
        }}>Chat para alunos da informática</p>
          </div>
          <div className="loginRight"  style={{flex: 1, backgroundColor: " #5a507c",  display: "flex", justifyContent: "center", alignItems: "center" }}>
            <form className="login-form"  style={{
         width: window.innerWidth * 0.33,
        maxWidth: '500px',
        backgroundColor: '#4c4371',
        padding: '20px',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
              <h2 style={{
            color: '#ffffff',
            margin: '15px 0',
            fontSize:"27px", 
            fontWeight:"bold"
          }}>ENTRAR</h2>
              <div className="login-avatar" style={{
            marginBottom: '20px',
          }}>
              </div>
              <div className="login-input">
                <label htmlFor="email" style={{
              color: '#ffffff',
              fontSize: '16px',
              marginBottom: '5px',
              display: 'block',
            }}>Email</label>
                <input type="email"  style={{
                    width: window.innerWidth * 0.25,
              padding: '10px',
              borderRadius: '5px',
              border: 'none',
              marginBottom: "20px"
              
            }} placeholder="Digite seu email" />
              </div>
              <div className="login-input">
                <label htmlFor="password" style={{
              color: '#ffffff',
              fontSize: '16px',
              marginBottom: '5px',
              display: 'block',
            }}>Senha</label>
                <input type="password"  style={{
                width: window.innerWidth * 0.25,
              padding: '10px',
              borderRadius: '5px',
              border: 'none',
               marginBottom: "40px"
            }} placeholder="Digite sua senha" />
              </div>
              <button type="submit" style={{
           width: window.innerWidth * 0.25,
            padding: '13px',
            backgroundColor: '#3b3460',
            color: '#ffffff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
          }} onClick={()=> navigate('/chats')}>ENTRAR</button>
            </form>
          </div>
        </div>
      );
}

