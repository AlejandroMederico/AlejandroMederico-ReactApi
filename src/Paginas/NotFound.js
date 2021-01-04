import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NotFound extends Component {
    render() {
        return (
            <div>
                <h1 className='title'>404</h1>
                <h1 className="subtitle">Pagina Incorrecta</h1>
                <Link to={'/'}>Home</Link>
            </div>
        )
    }
}
