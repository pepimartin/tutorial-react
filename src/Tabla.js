import React, { Component } from 'react';
import BodyTabla from "./BodyTabla";
import HeadTabla from "./HeadTabla";
class Tabla extends Component {
    render() {
        const { datosPersonas, eliminarPersona } = this.props;
        return (
            <table className="table">
                <HeadTabla/>
                <BodyTabla datosPersonas={datosPersonas} eliminarPersona={eliminarPersona} />
            </table>
        );
        const { personas } = this.state;
        return (
            <div className="container">
                <h1>Tutorial de React de Neoguias!</h1>
                <Tabla datosPersonas={personas} eliminarPersona={this.eliminarPersona} />
            </div>
        )
    }
}
export default Tabla;