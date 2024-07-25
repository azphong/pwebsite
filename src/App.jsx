import './App.css'

import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Chat from './Chat';
import Chatscope from './Chatscope';

export default function App() {
  
  AOS.init({
    duration: 1000,
    offset: 60,
    easing: 'ease-in-out-sine',  
    mirror: true
  });
 
  return (
    <div className='overflow-x-clip'>
      <div className="bg-cyan-300 h-screen grid grid-cols-1 gap-4 place-content-center"> 
        <h1 className="text-6xl font-bold" data-aos='fade-left'>
          Hello, I'm Aaron Hong
        </h1>
        <p data-aos='fade-right'>
          Nice to meet you<br/>Scroll down to learn more about me
        </p>
      </div>
      <div className="bg-red-300 h-half grid grid-cols-1 gap-4"> 
        <div data-aos='fade-right' className='grid grid-cols-1 place-items-center'>
        <Chat />
        </div>      
        </div>
      <div className="bg-yellow-300 h-half grid grid-cols-1 gap-4 place-content-center"> 
        <h1 data-aos='fade-right'>
        <iframe
          src="https://azph-aaronbot.hf.space/docs"
          width="850"
          height="450"
        ></iframe>

        </h1>
      </div>
      <div className="bg-green-300 h-half grid grid-cols-1 gap-4 place-items-center"> 
        <div data-aos='fade-right'>
        {/* <Chat /> */}
        </div>
      </div>
    </div>
  )
}
