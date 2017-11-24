import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

const styles = {
    header: {
        padding: 10,
        backgroundColor: '#38435a',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button: {
        padding: '0.85rem',
        border: 'none',
        borderRadius: 0,
        color: '#fff',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        textDecoration: 'none'
    },
    active: {
        backgroundColor: '#ea454b'
    }
}

export default class Header extends Component{
    logout(e) {
        e.preventDefault();
        localStorage.clear();
        this.props.history.replace('/');
    }

    render() {
        return (
            <header style={styles.header}>
                <div>
                    <NavLink activeStyle={styles.active} to="/timeline" style={styles.button}>Timeline</NavLink>
                    <NavLink activeStyle={styles.active} to="/perfil" style={styles.button}>Perfil</NavLink>
                </div>
                <button onClick={this.logout.bind(this)} style={styles.button}>Sair</button>
            </header>
        )
    }
}
