import React from "react";
import './ViewServers.css';

class ViewServers extends React.Component {
    render () {
        return (
            <div className="contenido">
                <div className="cajaSearch">
                    <form className="formSearch">
                        Búsqueda por Folio: 
                        <input type="text"/>
                        <input type="button" value="Buscar" className="btnSearch"/>
                    </form>
                    <table>
                        <tr>
                            <th>Server</th>
                            <th>IP</th>
                            <th>Status</th>
                            <th>IDApp</th>
                            <th>Protocolo</th>
                            <th>#</th>
                        </tr>
                        <tr>
                            <td>Dato</td>
                            <td>Dato</td>
                            <td>Dato</td>
                            <td>Dato</td>
                            <td>Dato</td>
                            <td>Dato</td>
                        </tr>
                        <tr>
                            <td>Dato</td>
                            <td>Dato</td>
                            <td>Dato</td>
                            <td>Dato</td>
                            <td>Dato</td>
                            <td>Dato</td>
                        </tr>
                        <tr>
                            <td>Dato</td>
                            <td>Dato</td>
                            <td>Dato</td>
                            <td>Dato</td>
                            <td>Dato</td>
                            <td>Dato</td>
                        </tr>
                        <tr>
                            <td>Dato</td>
                            <td>Dato</td>
                            <td>Dato</td>
                            <td>Dato</td>
                            <td>Dato</td>
                            <td>Dato</td>
                        </tr>
                    </table>
                </div>
            </div>   
        )
    }
}

export default ViewServers;