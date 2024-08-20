import axios from "axios";
import { useState, useEffect } from 'react';

export default function Chat() {
    const [answer, setAnswer] = useState('');
    const [question, setQuestion] = useState('');
    const [loading, setLoading] = useState(false);

    // const buttonHandler = () => {
    //     setLoading(true);
    //     handleSubmit();
    // }
    // useEffect( () => {
    //     window.console.log(loading);
    // }, [loading]);

    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();
        setAnswer("Hmmm...")
        setLoading(true)
        // const formData = new FormData(e.target)
        axios.post('https://azph-aaronbot.hf.space/llm_on_cpu', {
            // prompt: formData.get("prompt")
            prompt: question
        })
            .then(setQuestion(''))
            .then(function (response) {
            window.console.log(response);
            setAnswer(response.data)
            setLoading(false)
            })
            .catch(function (error) {
            window.console.log(error);
            })
            // .then(setLoading(false))
        
    }

    function handleChange(e) {
        setQuestion(e.target.value);
    }
  
    return (
        <div className="place-items-center place-content-center">
        <form onSubmit={handleSubmit} className="flex flex-row place-items-center place-content-center">
            <input 
                type="text" 
                name="prompt" 
                className="bg-transparent text-4xl w-3/4 form-input border-transparent place-items-center" 
                placeholder="Message Aaronbot" 
                onChange={handleChange} 
                value={question} 
                disabled={loading}
                required/>
            <button type="submit" disabled={loading}>Send!</button>
        </form>
        <p>{answer}</p>
        </div>
    )
  }