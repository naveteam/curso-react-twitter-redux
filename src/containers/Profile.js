import React, { Component } from 'react';

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
}

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabledPassword: true,
            email: '',
            username: '',
            password: ''
        }
    }

    switchPassword(e) {
        e.preventDefault();
        this.setState({disabledPassword: !this.state.disabledPassword});
    }

    render() {
        return (
            <div style={styles.profile}>
                <h1 style={styles.center}>Perfil</h1>
                <form>
                    <label htmlFor="">
                        Nome de usuário: 
                        <input type="text"/>
                    </label>
                    <label htmlFor="">
                        E-mail:
                        <input type="email"/>
                    </label>
                    <label htmlFor="">
                        Password
                        <input type="password" disabled={this.state.disabledPassword}/>
                        <button onClick={this.switchPassword.bind(this)}>Trocar senha</button>
                    </label>
                    <button style={styles.submit} type="submit">Salvar</button>
                </form>
            </div>
        )
    }
}
