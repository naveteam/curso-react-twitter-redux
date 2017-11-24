import React from 'react';

const styles = {
    tweet: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #38435a',
        marginTop:20
    },
    name: {
        backgroundColor: '#38435a',
        color: '#fff',
        padding: '5px 10px'
    },
    text: {
        padding: 20,
    }

}

export default props => {
    const { name, text } = props.tweet;
    return (
        <div style={styles.tweet}>
            <div style={styles.name}>
                <p>{name}</p>
            </div>
            <p style={styles.text}>{text}</p>
        </div>
    );
}