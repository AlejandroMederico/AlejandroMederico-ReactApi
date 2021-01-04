import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export class pelicula extends Component {
    static propTypes = {
        Id: PropTypes.string,
        Title: PropTypes.string,
        Year: PropTypes.string,
        Poster: PropTypes.string
    }

    render() {
        const {Id,Poster,Year,Title} = this.props
        return (
                <Link to={`/detalles/${Id}`} className="card">
                    <div className="card-image">
                        <figure className="image">
                            <img src={Poster} 
                            alt={Title}/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">{Title}</p>
                                <p className="subtitle is-6">{Year}</p>
                            </div>
                        </div>
                    </div>
                </Link>
        )
    }
}

export default pelicula

