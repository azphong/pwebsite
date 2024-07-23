import axios from "axios";

export default function Chat() {
    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();
        const formData = new FormData(e.target)
        axios.post('https://azph-aaronbot.hf.space/llm_on_cpu', {
            prompt: formData.get("prompt")
        })
            .then(console.log(response));
    }
  
    return (
        <form name='form2' target='_blank' onSubmit={handleSubmit} className="grid grid-cols-1 place-items-center">
            <input type="text" name="prompt" className="w-64" placeholder="Message Aaronbot"
            // class="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            // id="username" 
            />
            <button type="submit" form='form2'>Send!</button>
        </form>
    )
  }