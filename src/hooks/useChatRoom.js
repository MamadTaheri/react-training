import {useEffect, useReducer, useState} from "react";

const reducer = (message, incomingMessage) => [
    message,
    ...incomingMessage
];

export const useChatRoom = (socket, messages= []) => {
    const [status, setStatus] = useState(null);
    const [message, appendMessage] = useReducer(
        reducer,
        messages
    );

    const send = message => socket.emit("message", message);

    useEffect(() => {
        socket.on("connsection", () => setStatus("connected"));
        socket.on("disconnecting", () => setStatus("disconnected"));
        socket.on("message", setStatus);
        return () => {
            socket.removeAllListeners("connect");
            socket.removeAllListeners("disconnect");
            socket.removeAllListeners("message");
        }
    }, []);

    return {
        status,
        messages,
        send
    }
}