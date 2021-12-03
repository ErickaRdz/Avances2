import React from "react";
import './AddServer.css';

class AddServer extends React.Component{
    render() {
        return (
        <div className="contenido">
            <h1 className="titulo">Agregar Servidor</h1>
            <div className="cajaAdd">
                <form>
                    <input type="text" className="datos" placeholder="Servidor"/><br />
                    <input type="text" className="datos" placeholder="IP"/><br />
                    <input type="password" className="datos" placeholder="Password"/><br />
                    <select className="selector">
                        <option>Protocolo</option>
                        <option>HTTPS</option>
                        <option>SSL</option>
                        <option>SFTP</option>
                    </select><br />
                    <input type="submit" className="enviar"/>
                </form>
            </div>
        </div>
        )
    }
}

export default AddServer;