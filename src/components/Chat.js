import React from 'react';

// Components
import Navbar from './Navbar';

// Styles
import styles from './Chat.module.css'

const Chat = () => {
    return (
        <div className={styles.container}>
            <Navbar />
        </div>
    );
};

export default Chat;