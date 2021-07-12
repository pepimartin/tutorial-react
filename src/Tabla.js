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
    }
}
export default Tabla;
