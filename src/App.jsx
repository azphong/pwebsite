import './App.css'

import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Chat from './Chat';

export default function App() {
  
  AOS.init({
    duration: 750,
    offset: 120,
    easing: 'ease-in-out-sine',  
    mirror: true,
    anchorPlacement: 'top-bottom'
  });
 
  return (
    <div className='bg-[#fcf5e5] grid grid-cols-1 place-items-center'>
      <div className="h-screen grid grid-cols-1 gap-4 place-content-center" data-aos="fade-in"> 
        <div className="text-6xl font-bold" >
          Hello, I'm Aaron Hong
        </div>
        <div>
          Welcome to my digital portfolio and resume
        </div>
      </div>
      <div className="h-[75vh] w-3/4 grid grid-cols-1 place-content-center relative" data-aos="fade-right"> 
        <div className='h-full text-left'>
          <div className="text-5xl font-bold" >Projects</div>
          <div className='flow-root font-bold'><br/>
            <div className='float-left'>Database Research Chatbot – UW/ACEP Capstone</div>
            <div className='float-right'>Jan '24 – May '24</div><br/>
            <div className='font-normal relative left-4'>
            •	Collaborated with 7 team members to develop an open source full-stack research assistant chatbot application<br/>
            •	Leveraged a large language model to generate prompt responses with context from a large PDF database<br/>
            •	Constructed a Pythonic data pipeline which uses optical character recognition to convert PDF documents into JSON documents for vectorization<br/>
            •	Designed frontend user interface using React<br/>
            •	Deployed LLM query service on Google Cloud Run to listen for HTTP requests from the website<br/>
            • Check out the free, open-source code here!
            </div>
          </div>
          <div className='flow-root font-bold'><br/>
            <div className='float-left'>Catformer – Personal Unity Project</div>
            <div className='float-right'>Aug ‘23 – Present</div><br/>
            <div className='font-normal relative left-4'>
            •	Developing Catformer, a 2D platformer game personal project with state-of-the-art platformer physics programmed in C# with Unity<br/>
            •	Run, dash, and climb through a pixel-perfect world, blasting everything that gets in your way!
            </div>
          </div>
          <div className='flow-root font-bold'><br/>
            <div className='float-left'>Aaronbot – Personal Full-stack LLM Project</div>
            <div className='float-right'>Jul '24' – Present</div><br/>
            <div className='font-normal relative left-4'>
            •	Currently training and tuning an open-source LLM backend to impersonate me<br/>
            •	Designing and developing a frontend interface for users to interact with “me”
            </div>
          </div>

        </div>
      </div>
      <div className="h-[75vh] w-3/4 grid grid-cols-1 place-content-center relative" data-aos="fade-right"> 
        <div className='h-full text-left'>
          <div className="text-5xl font-bold" >Education</div>
          <div className='flow-root font-bold'><br/>
            <div className='float-left'>University of Washington, College of Engineering</div>
            <div className='float-right'>Sep '20' – Jun '24</div>
          </div>
          <div>
          Bachelor of Science in Electrical and Computer Engineering<br/>
          Notable coursework: <br/>
          <div className='relative left-4'>
          •	Data Structures and Algorithms<br/>
          •	Design of Digital Circuits and Systems <br/>
          •	Computer Architecture I, II <br/>
          •	Embedded Systems and RTOS <br/>
          •	Network Security and Cryptography <br/>
          •	Software Development
          </div>
          </div>
        </div>
      </div>
      <div className="h-[75vh] w-3/4 grid grid-cols-1 place-content-center relative" data-aos="fade-right"> 
        <div className='h-full text-left'>
          <div className="text-5xl font-bold" >Work Experience</div>
          <div className='flow-root font-bold'><br/>
            <div className='float-left'>Hardware Test Engineer Intern – Pactera EDGE, Microsoft, Redmond</div>
            <div className='float-right'>Jun '20 – Sep '20</div><br/>
            <div className='relative left-4 font-normal'>
            •	Worked closely with a prototype model of Microsoft Surface Headphones<br/>
            •	Ran extensive test cases and compiled performance reports, going into detail about any bugs or issues <br/>
            •	Conducted market research and composed a competitive analysis report<br/>
            </div>
          </div>
          <div className='flow-root font-bold'><br/>
            <div className='float-left'>Operations Analyst – Pactera EDGE, Microsoft, Redmond</div>
            <div className='float-right'>Nov '21 – Jun '22</div><br/>
            <div className='relative left-4 font-normal'>
            •	Reviewed suspicious activity on Microsoft Azure, identifying and flagging accounts needing further inspection <br/>
            •	Worked around the clock with teammates in Europe and Asia to ensure swift termination of fraudulent accounts
            </div>
          </div>
          <div className='flow-root font-bold'><br/>
            <div className='float-left'>Programming Teacher – CS Wonders, Redmond</div>
            <div className='float-right'>Jun '20 – Sep '23</div><br/>
            <div className='relative left-4 font-normal'>
            •	Taught Python programming skills to summer classes<br/>
            •	Helped create exercises on the course website<br/>
            •	Prepared lessons designed to maximize student comprehension and retention
            </div>
          </div>
        </div>
      </div>
      <div className='h-[12.5vh]'></div>
    </div>
  )
}
