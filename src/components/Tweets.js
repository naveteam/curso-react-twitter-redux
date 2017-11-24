import React from 'react';
import Tweet from './Tweet';

const styles = {
    tweets: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 20,
        width: '100%',
        padding: 20,
        border: '1px solid #38435a'
    },
    center: {
        textAlign: 'center'
    }
}

export default props => {
    return (
        <div style={styles.tweets}>
            <h2 style={styles.center}>Linha do tempo</h2>
            {props.tweets.length === 0 ? 
                <h4 style={styles.center}>Não há tweets para serem mostrados</h4>
                : props.tweets.map(tweet => <Tweet tweet={tweet} key={tweet.id}/>)
            }
        </div>
    );
}