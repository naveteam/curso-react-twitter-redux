import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Tweets from '../components/Tweets';
import { list, create } from '../redux/modules/tweets';
import { getUser } from '../redux/modules/auth';

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

class Timeline extends Component {
    constructor(props){
        super(props);
        this.state = {
            tweet: ''
        }
    }

    async componentWillMount(){
        getUser() ? await this.props.list() : this.props.history.replace('/');
    }

    async handleSubmit(e) {
        e.preventDefault();
        // this.props.create({userId: this.props.user.id, text: this.state.tweet});
        await this.props.create({userId: 1, text: this.state.tweet});
        this.setState({tweet: ''});
    }

    handleChange(e) {
        this.setState({tweet: e.target.value})
    }

    async refresh() {
        await this.props.list();
    }

    render() {
        return (
            <div style={styles.timeline}>
                <form onSubmit={this.handleSubmit.bind(this)} style={styles.form}>
                    <textarea
                        value={this.state.tweet}
                        onChange={this.handleChange.bind(this)}
                        style={styles.newTweet}
                        name="newTweet"
                        rows="10"
                        placeholder="Escreva alguma coisa..."
                    />
                    <button type="submit" style={styles.submit}>Tweet</button>
                </form>
                <button disabled={!this.state.tweet} onClick={this.refresh.bind(this)} style={styles.refresh}>Atualizar</button>
                <Tweets tweets={this.props.tweets.data}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    tweets: state.tweets,
    user: state.auth.user
});

const mapDispatchToProps = dispatch => bindActionCreators({
    list,
    create
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);