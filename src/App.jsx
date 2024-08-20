import './App.css'

import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Chat from './Chat';

export default function App() {
  
  AOS.init({
    duration: 750,
    offset: 0,
    easing: 'ease-in-out-sine',  
    mirror: true,
    anchorPlacement: 'top-bottom'
  });
 
  return (
    <div className='grid grid-cols-1 place-items-center'>
      <div className="bg-white h-screen grid grid-cols-1 gap-4 place-content-center" data-aos="fade-in"> 
        <div className="text-6xl font-bold" >

          Hello, I'm Aaron Hong
        </div>
        {/* </div> */}
        <p >
          Welcome to my digital resume
        </p>
      </div>
      <div className="bg-white h-screen w-3/4 grid grid-cols-1 place-content-center" data-aos="fade-right"> 
        <div className='h-full text-left'>
          <div className="text-5xl font-bold text-left" >Projects</div>
          <div className='font-bold'><br/>Database Research Chatbot – UW/ACEP Capstone			Jan ‘24 – May ‘24</div>
          <div>
          •	Collaborated with 7 team members to develop an open source full-stack research assistant chatbot application<br/>
          •	Leveraged a large language model to generate prompt responses with context from a large PDF database<br/>
          •	Constructed a Pythonic data pipeline which uses optical character recognition to convert PDF documents into JSON documents to be vectorized and used as context for the LLM assistant<br/>
          •	Designed frontend user interface using React<br/>
          •	Deployed LLM query service on Google Cloud Run to listen for HTTP requests from the website<br/>
          </div>
          <div className='font-bold'><br/>Catformer – Personal Unity Project			Aug ‘23 – Present</div>
          <div>
          •	Developing Catformer, a 2D platformer game personal project with state-of-the-art platformer physics programmed in C# with Unity<br/>
          •	Run, dash, and climb through a pixel-perfect world, blasting everything that gets in your way!
          </div>
          <div className='font-bold'><br/>Aaronbot – Personal Full-stack LLM Project			Jul ’24 – Present</div>
          <div>
          •	Currently training and tuning an open-source LLM backend to impersonate me<br/>
          •	Designing and developing a frontend interface for users to interact with “me”
          </div>
        </div>
      </div>
      <div className="bg-white h-screen w-3/4 grid grid-cols-1 place-content-center" data-aos="fade-right"> 
        <div className='h-full text-left'>
          <div className="text-5xl font-bold" >Education</div>
          <div className='font-bold'><br/>University of Washington, College of Engineering			Jan ‘24 – May ‘24</div>
          <div>
          Bachelor of Science in Electrical and Computer Engineering<br/>
          Notable coursework: <br/>
          •	Data Structures and Algorithms<br/>
          •	Design of Digital Circuits and Systems <br/>
          •	Computer Architecture I, II <br/>
          •	Embedded Systems and RTOS <br/>
          •	Network Security and Cryptography <br/>
          •	Software Development
          </div>
        </div>
      </div>
      <div className="bg-white h-screen w-3/4 grid grid-cols-1 place-content-center" data-aos="fade-right"> 
        <div className='h-full text-left'>
          <div className="text-5xl font-bold text-left" >Work Experience</div>
          <div className='font-bold'><br/>Hardware Test Engineer Intern – Pactera EDGE, Microsoft, Redmond			Jun ’20 – Sep ‘20</div>
          <div>
          •	Worked closely with a new model of Microsoft Surface Headphones prior to their release. <br/>
          •	Ran extensive test cases and compiled performance reports, going into detail about any bugs or issues. <br/>
          •	Conducted market research and composed a competitive analysis report.
          <br/>
          </div>
          <div className='font-bold'><br/>Operations Analyst – Pactera EDGE, Microsoft, Redmond			Nov ’21 – Jun ‘22</div>
          <div>
          •	Reviewed suspicious activity on Microsoft Azure, identifying and flagging accounts needing further inspection. <br/>
          •	Worked around the clock with teammates in Europe and Asia to ensure swift termination of fraudulent accounts.
          </div>
          <div className='font-bold'><br/>Programming Teacher – CS Wonders, Redmond			Jun ’20 – Sep ‘23</div>
          <div>
          •	Taught Python programming skills to summer classes.<br/>
          •	Helped create exercises on the course website.<br/>
          •	Prepared lessons designed to maximize student comprehension and retention.

          </div>
        </div>
      </div>
    </div>
  )
}
