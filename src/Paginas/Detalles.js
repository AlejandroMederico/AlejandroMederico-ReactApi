import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const API_KEY= '5746d46e'

export class Detalles extends Component {
    static propTypes = {
        match:PropTypes.shape({
            params:PropTypes.object,
            isExact:PropTypes.bool,
            path:PropTypes.string,
            url:PropTypes.string
        })
    }
    state ={movie:{}}
    BuscarPeliFetch({id}){
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then(res => res.json())
        .then(data =>{
            this.setState({movie: data})
            console.log(this.state);
        })
    }
    componentDidMount(){
        const {id} = this.props.match.params
        console.log(this.props);
        this.BuscarPeliFetch({id})
    }

    render() {
        const {Title,Poster,Actors,Metascore,Plot}=this.state.movie
        return (
            <div>
                <Link to={'/'}>Home</Link>
               <h1>{Title}</h1>
               <img src={Poster} alt={Title}/>
                <h3>{Actors}</h3>
                <span>{Metascore}</span>
                <p>{Plot}</p> 
            </div>
        )
    }
}

export default Detalles
