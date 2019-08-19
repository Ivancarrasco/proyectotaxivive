import React, {Component} from 'react';


export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = ({
        nombre:'',
        edad:''
       
      })
    this.procesar = this.procesar.bind(this);
    this.cambioNombre = this.cambioNombre.bind(this);
    this.cambioEdad = this.cambioEdad.bind(this);    
   
  }


  render() {
    return (
      <div>
        <form onSubmit={this.procesar}>
          <p>Nombre:<input type="text" value={this.state.nombre} onChange={this.cambioNombre} /></p>
          <p>Apellido:<input type="text" /></p>
          <p>Telefono:<input type="number" value={this.state.edad} onChange={this.cambioEdad} /></p>         
          <p><input type="submit" /></p>
        </form>
        <hr />
        <h3>Datos Ingresados</h3>
        <p>Nombre:{this.state.nombre}</p>
        <p>Telefono:{this.state.edad}</p>
     
      </div>
    );
  }

  procesar(e) {
    e.preventDefault();
    alert('Dato cargado '+this.state.nombre + ' ' + 
                         +this.state.edad + ' ' 
                         );
            
  }

  cambioNombre(e) {
    this.setState( {
      nombre: e.target.value
    })
  }

  cambioEdad(e) {
    this.setState( {
      edad: e.target.value
    })
  }  

  cambioEstudio(e) {
    this.setState( {
      estudio: !this.state.estudio
    })
  }    
}


export default Form;



