import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Pelicula from './pelicula'

export class ListaPelicula extends Component {
    static propTypes = {
        ListaPeli: PropTypes.array
    }
    
    render() {
        const {ListaPeli}= this.props 
        return(
            <div className='MoviesList'>
            { ListaPeli.map (peli =>{
              return <div 
                     className='MoviesList-item'
                     key={peli.imdbID}>
                        <Pelicula
                        Id={peli.imdbID}
                        Title={peli.Title}
                        Year={peli.Year}
                        Poster={peli.Poster}
                        />    
                     </div>  
              })}
            </div>
        )      
    }
}

export default ListaPelicula
