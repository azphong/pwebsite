import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import axios from "axios";
import { useState } from 'react';

export default function Chatscope() {
    const [answer, setAnswer] = useState('');
    const [question, setQuestion] = useState('');

    const handleSend = (text) => {
        // Prevent the browser from reloading the page
        // e.preventDefault();
        setAnswer("Hmmm...")
        //const formData = new FormData(e.target)
        axios.post('https://azph-aaronbot.hf.space/llm_on_cpu', {
            prompt: text
        })
            .then(function (response) {
            window.console.log(response);
            setAnswer(response.data)
            })
            .catch(function (error) {
            window.console.log(error);
            });
    }
    return (
        <div className="styles.min">     
        <MainContainer className="bg-white">
            <ChatContainer>
            <MessageList>
                <Message
                model={{
                    message: "Hello my friend",
                    sentTime: "just now",
                    sender: "Joe",
                }}
                />
            </MessageList>
            <MessageInput onSend={handleSend} placeholder="Type message here"/>
            </ChatContainer>
        </MainContainer>
        <p className="text-6xl">{answer}</p>
        </div>
    )
}

