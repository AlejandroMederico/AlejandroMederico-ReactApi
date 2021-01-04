import React, { Component } from 'react'
import ListaPelicula from '../Componente/ListaPelicula'
import {Titulo} from '../Componente/titulo'
import Busqueda from '../Componente/Busqueda'


export default class home extends Component {
    state ={
        resultado: [],
        BusquedaUsada:false
      }
    
      handleResultado = (resultados) =>{
        this.setState({resultado: resultados, BusquedaUsada: true})
      }
    
      renderResult (){
       return this.state.resultado.length === 0
        ? <p>Sin Resultadados</p>
        : <ListaPelicula ListaPeli={this.state.resultado}/>
      }
    render() {
        return (
            <div>
                <Titulo>Busca tu Pelicula</Titulo>
                    <div className="BusquedaForm">
                    <Busqueda ResultadoBusqueda={this.handleResultado}/>
                    </div> 
                    {this.state.BusquedaUsada
                    ? this.renderResult()
                    : <p>Uses el buscador de pelicula</p>
                }  
            </div>
        )
    }
}
