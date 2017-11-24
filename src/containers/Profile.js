import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { update, getUser, setUser } from '../redux/modules/auth';
const styles = {
    profile: {
        alignSelf: 'left'
    },
    center: {
        textAlign: 'center'
    },
    submit: {
        border: 0,
        borderRadius: 0,
        backgroundColor: '#38435a',
        color: '#fff',
        padding: '0.5rem'
    },
    message: {
        padding: 10,
        backgroundColor: '#ea454b',
        color: '#fff',
        marginTop: 20
    }
}

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabledPassword: true,
            message: '',
            user: {
                email: '',
                name: '',
                password: '',
                id: null
            }
        }
    }

    async componentWillMount() {
        const user = getUser();
        if (!user) {
            this.props.history.replace('/');
        } else {
            await this.props.setUser(user);
            this.setState({
                ...this.state,
                user: {
                    email: this.props.user.email,
                    name: this.props.user.name,
                    password: this.props.user.password,
                    id: this.props.user.id
                }
            })
        }
    }

    switchPassword(e) {
        e.preventDefault();
        this.setState({disabledPassword: !this.state.disabledPassword});
    }

    handleChange(key, e) {
        this.setState({
            user: {
                ...this.state.user,
                [key]: e.target.value
            }
        });
    }

    async handleSubmit(e) {
        e.preventDefault();
        try {
            await this.props.update(this.state.user);
            this.setState({message: 'Salvou!'});   
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div style={styles.profile}>
                <h1 style={styles.center}>Perfil</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label htmlFor="">
                        Nome de usuário: 
                        <input value={this.state.user.name} onChange={this.handleChange.bind(this, 'name')} type="text"/>
                    </label>
                    <label htmlFor="">
                        E-mail:
                        <input value={this.state.user.email} onChange={this.handleChange.bind(this, 'email')} type="email"/>
                    </label>
                    <label htmlFor="">
                        Senha
                        <input value={this.state.user.password} onChange={this.handleChange.bind(this, 'password')} type="password" disabled={this.state.disabledPassword}/>
                        <button onClick={this.switchPassword.bind(this)}>Trocar senha</button>
                    </label>
                    <button 
                        disabled={
                            !this.state.user.name ||
                            !this.state.user.email ||
                            !this.state.user.password
                        }
                        style={styles.submit} 
                        type="submit"
                    >
                        Salvar
                    </button>
                </form>
                {this.state.message && 
                    <div style={styles.message}>
                        <p>{this.state.message}</p>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.auth.user
});

const mapDispatchToProps = dispatch => bindActionCreators({
    update,
    setUser
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);