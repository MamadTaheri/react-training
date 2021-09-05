import React from 'react';
import { auth } from "../services/firebase";
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';

// Components
import Navbar from './Navbar';

// Styles
import styles from './Chat.module.css'

const Chat = () => {

    const history = useHistory();

    const logoutHandler = async () => {
        await auth.signOut();
        history.push("/")
    }

    return (
        <div className={styles.container}>
            <Navbar logoutHandler={logoutHandler} />

            <ChatEngine 
                height="calc(100vh - 50px)"
                projectID="dde4bb7a-34b3-46a1-937c-97aae97447cb"
                userName="."
                userSecret="."
            />
        </div>
    );
};

export default Chat;