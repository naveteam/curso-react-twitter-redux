import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../index.css';

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#38435a',
        padding: 20,
        color: 'white',
    },
    submit: {
        padding: '0.85rem',
        border: 'none',
        borderRadius: 0,
        color: '#fff',
        backgroundColor: '#ea454b',
        cursor: 'pointer',
        textDecoration: 'none'
    },
    center: {textAlign: 'center'},
    link: {
        marginTop: 15, 
        color: '#fff', 
        float: 'right'
    }
}

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    stateOnChange(key, e) {
        this.setState({
            [key]: e.target.value,
        });
    }

    formSubmit(e) {
        e.preventDefault();
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="container">
                <form 
                    onSubmit={this.formSubmit.bind(this)}
                    style={styles.form}
                >
                    <h2 style={styles.center}>Cadastro</h2>
                    <label htmlFor="name">
                        <span>Nome de usuário:</span>
                        <input 
                            value={this.state.username} 
                            onChange={this.stateOnChange.bind(this, 'username')} 
                            type="text" placeholder="Demogorgon"
                            required
                        />
                    </label>
                    <label htmlFor="name">
                        <span>Email:</span>
                        <input 
                            value={this.state.email} 
                            onChange={this.stateOnChange.bind(this, 'email')} 
                            type="email" placeholder="stranger@things.com"
                            required
                        />
                    </label>
                    <label htmlFor="senha">
                        Senha:
                        <input
                            value={this.state.password}
                            onChange={this.stateOnChange.bind(this, 'password')}
                            type="password"
                            placeholder="******"
                            required
                        />
                    </label>
                    <button style={styles.submit} type="submit">Cadastrar</button>
                    <Link style={styles.link} to="/">Login</Link>
                </form>
            </div>
        )
    }
}