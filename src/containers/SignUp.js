import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'
import { register } from '../redux/modules/auth';
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

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    stateOnChange(key, e) {
        this.setState({
            [key]: e.target.value,
        });
    }

    async formSubmit(e) {
        e.preventDefault();
        await this.props.register(this.state);
        if (!this.props.user.error) {
            this.props.history.push('/');
        }
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
                            value={this.state.name} 
                            onChange={this.stateOnChange.bind(this, 'name')} 
                            type="text" placeholder="Demogorgon"
                            required
                        />
                    </label>
                    <label htmlFor="email">
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
                    <button 
                        style={styles.submit}
                        disabled    ={
                            !this.state.name || 
                            !this.state.email || 
                            !this.state.password
                        } 
                        type="submit"
                    >
                        Cadastrar
                    </button>
                    <Link style={styles.link} to="/">Login</Link>
                </form>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    user: state.auth
});

const mapDispatchToProps = dispatch => bindActionCreators({
    register
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)