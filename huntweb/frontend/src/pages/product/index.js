import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';
import { Link } from 'react-router-dom';

export default class Product extends Component{
    state = {
        produto: {},
    }

    async componentDidMount(){
        const { id } = this.props.match.params;

        const response = await api.get('/products/' + id);

        this.setState({ produto: response.data });
    }

    render(){
        const { produto } = this.state;

        return(
            <div className="product-info">
                <h1>{produto.title}</h1>
                <p>{produto.description}</p>
                <p>
                    URL: <a href={produto.url} target="_blank">{produto.url}</a>
                </p>
                <div className="actions">
                    <Link to={'/'}>Voltar</Link>
                </div>
            </div>
        );
    }
}