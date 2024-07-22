import './App.css'
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


function App() {

  AOS.init({
    duration:1000,
    offset:60,
    easing: 'ease-in-out-sine',  
    mirror:true
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
        <h1 data-aos='fade-left'>
          New header
        </h1>
      </div>
      <div className="bg-yellow-300 h-half grid grid-cols-1 gap-4 place-content-center"> 
        <h1 data-aos='fade-right'>
          New header 2
        </h1>
      </div>
    </div>
  )
}

export default App
