import React from 'react';
import Tabla from './Tabla';

class App extends React.Component {
    state = {
        personas: [
            {
                nombre: 'Clark',
                apellido: 'Kent',
            },
            {
                nombre: 'Bruce',
                apellido: 'Wayne',
            },
            {
                nombre: 'Peter',
                apellido: 'Parker',
            },
            {
                nombre: 'Selina',
                apellido: 'Kyle',
            },
        ],
    }
    eliminarPersona = (indice) => {
        const { personas } = this.state

        this.setState({
            personas: personas.filter((personas, i) => {
                return i !== indice;
            }),
        });
    }
    render() {
        const {personas} = this.state;
        return (
            <div className="App">
                <h1>Tutorial de React</h1>
                <Tabla datosPersonas={personas} eliminarPersona={this.eliminarPersona}/>
            </div>
        );
    }
}
 export default App;