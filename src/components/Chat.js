import React,{ useState, useEffect, useContext } from 'react';
import { auth } from "../services/firebase";
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import axios from 'axios';

// Components
import Navbar from './Navbar';

// Styles
import styles from './Chat.module.css';

// Context
import { AuthContext } from '../contexts/AuthContextProvider'

const Chat = () => {

    const [loading, setLoading] = useState(true);
    const user = useContext(AuthContext)
    const history = useHistory();

    useEffect(() => {
        if(!user) {
            history.push("/");
            return;
        }

        axios.get("https://api.chatengine.io/users/me",{
            headers: {
                "project-id": "dde4bb7a-34b3-46a1-937c-97aae97447cb",
                "user-name": user.email,
                "user-secret": user.uid
            }
        })
        .then(() => {
            setLoading(false)
        })
        .catch(() => {
            let formdata = new FormData();
            formdata.append("email", user.email);
            formdata.append("username", user.email);
            formdata.append("secret", user.uid);
            getFile(user.photoURL)
                .then(avatar => {
                    formdata.append("avatar", avatar, avatar.name);
                    axios.post("https://api.chatengine.io/users/", formdata, {
                        headers: {
                            "private-key": "f50aa19d-d9ac-4e36-98f0-e397e7cfb566"
                        }
                    })
                    .then(() => setLoading(false))
                    .catch(error => console.log(error))
                })
        })

    }, [user, history])

    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();
        return new File([data], "userPhoto.jpg", {type:"image/jpeg"})
    }

    const logoutHandler = async () => {
        await auth.signOut();
        history.push("/")
    }

    if (!user || loading) return "Loading...";

    return (
        <div className={styles.container}>
            <Navbar logoutHandler={logoutHandler} />

            <ChatEngine 
                height="calc(100vh - 50px)"
                projectID="dde4bb7a-34b3-46a1-937c-97aae97447cb"
                userName={user.email}
                userSecret={user.uid}
            />
        </div>
    );
};

export default Chat;