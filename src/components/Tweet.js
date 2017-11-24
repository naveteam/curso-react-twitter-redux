import React from 'react';

const styles = {
    tweet: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #38435a'
    },
    username: {
        backgroundColor: '#38435a',
        color: '#fff',
        padding: '5px 10px'
    },
    text: {
        padding: 20
    }

}

export default props => {
    const { username, text } = props.tweet;
    return (
        <div style={styles.tweet}>
            <div style={styles.username}>
                <p>{username}</p>
            </div>
            <p style={styles.text}>{text}</p>
        </div>
    );
}