import React, { Component } from 'react'
const API_KEY= '5746d46e'

export default class Busqueda extends Component {
    state={
        inputPelicula:''
    }

    BusquedaPelicula = (e) =>{
        this.setState({inputPelicula: e.target.value})
    }
    Enviar = (e) =>{
        e.preventDefault()
        const {inputPelicula}=this.state
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputPelicula}`)
        .then(res => res.json())
        .then(data =>{
            const {Search =[], totalResults='0'} = data
            console.log(Search, totalResults);
            this.props.ResultadoBusqueda(Search)
        })
         
    }
    
    render() {
        return (
            <form onSubmit={this.Enviar}>
                <div className="field has-addons">
                    <div className="control">
                        <input 
                        className="input" 
                        type="text" 
                        onChange={this.BusquedaPelicula}
                        placeholder="Ingrese la pelicula"/>
                    </div>
                    <div className="control">
                        <button className="button is-info">
                        Buscar
                        </button>
                    </div>
                </div>               
            </form>

        )
    }
}
