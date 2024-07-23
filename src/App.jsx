import './App.css'
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Chat from './Chat';

export default function App() {
  AOS.init({
    duration: 1000,
    offset: 60,
    easing: 'ease-in-out-sine',  
    mirror: true
  });
 
  return (
    <div className='overflow-x-clip overflow-y-clip'>
      <div className="bg-cyan-300 h-screen grid grid-cols-1 gap-4 place-content-center"> 
        <h1 className="text-6xl font-bold" data-aos='fade-left'>
          Hello, I'm Aaron Hong
        </h1>
        <p data-aos='fade-right'>
          Nice to meet you<br/>Scroll down to learn more about me
        </p>
      </div>
      <div className="bg-red-300 h-half grid grid-cols-1 gap-4 place-content-center"> 
        <Chat data-aos='fade-left' className='flex-col'/>
      </div>
      <div className="bg-yellow-300 h-half grid grid-cols-1 gap-4 place-content-center"> 
        <h1 data-aos='fade-right'>
        <iframe
          src="https://azph-aaronbot.hf.space/docs"
          frameborder="0"
          width="850"
          height="450"
        ></iframe>

        </h1>
      </div>
      <div className="bg-green-300 h-half grid grid-cols-1 gap-4 place-content-center"> 
        <div data-aos='fade-right'>
          {/* <form action="https://azph-aaronbot.hf.space/llm_on_cpu" method="post" id='form1' target='_blank' name='form1'> */}
          {/* <form id='form1' name='form1' target='_blank'>
            <input type="text" name="prompt"
              // class="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              // id="username" 
              // type="text" 
              // placeholder="Message Aaronbot"
              />
            <button type="submit" form='form1'>Submit form</button>
          </form> */}
        </div>
      </div>
    </div>
  )
}
