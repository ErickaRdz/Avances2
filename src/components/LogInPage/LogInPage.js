import React, { useState } from 'react';
import './LogInPage.css'

function LogInPage({LogIn, error}) {

    const [details, setDetails] = useState({user:"",password:""});

    const submitHandler = e => {
        e.preventDefault();
        
        LogIn(details);
    }

    return (
        <div className="bodyBackground">
            <div className="contenido">
                <form className="cajaForm" onSubmit={submitHandler}>
                <img src={require('./logo.svg').default} alt="logo.svg" className="logoLogin"/>
                <h1>Iniciar Sesión</h1>
                    <div>
                        <input type="text" name="user" id="user" className="user" placeholder="Ingresa tu Usuario" onChange={e => setDetails({...details, user: e.target.value})} value={details.user}/>
                        <input type="password" name="password" id="password" className="pass" placeholder="Ingresa tu Contraseña" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                    </div>
                    <div>
                        <button type="submit" className="login">Entrar</button>
                    </div>
                    <div>{(error !== "") ? (<div className="error">{error}</div>): ""}</div>
                </form>
            </div>
        </div>
    )
}

export default LogInPage