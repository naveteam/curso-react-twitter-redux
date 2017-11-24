import React, { Component } from 'react';
import Tweets from './Tweets';

const styles = {
    timeline: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    form: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    newTweet: {
        display: 'flex',
        flex: 1
    },
    submit: {
        border: 0,
        borderRadius: 0,
        backgroundColor: '#38435a',
        color: '#fff',
        padding: '0.5rem'
    },
    refresh: {
        backgroundColor: '#ea454b',
        padding: '0.75rem',
        marginTop: 20,
        border: 0,
        color: '#fff',
        alignSelf: 'flex-end'
    }
}

export default class Timeline extends Component {
    constructor(props){
        super(props);
        this.state = {
            tweet: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    handleChange(e) {
        this.setState({tweet: e.target.value})
    }

    refresh() {
        console.log('atualiza');
    }

    render() {
        return (
            <div style={styles.timeline}>
                <form onSubmit={this.handleSubmit.bind(this)} style={styles.form}>
                    <textarea
                        value={this.state.value}
                        onChange={this.handleChange.bind(this)}
                        style={styles.newTweet}
                        name="newTweet"
                        rows="10"
                        placeholder="Escreva alguma coisa..."
                    />
                    <button type="submit" style={styles.submit}>Tweet</button>
                </form>
                <button onClick={this.refresh.bind(this)} style={styles.refresh}>Atualizar</button>
                <Tweets tweets={[{username: 'teste', text: 'AEHOOOOOO'}]}/>
            </div>
        )
    }
}