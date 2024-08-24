import './App.css'

import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Chat from './Chat';

function BulletSection({title, date, subtitles, bullets}) {
  return (
  <div className='flow-root font-bold'><br/>
    <div className='float-left'>{title}</div>
    <div className='float-right'>{date}</div><br/>
    {subtitles.map(item => {
      return (
        <div className='font-normal'>{item}<br/></div>
      )
    })}
    {bullets.map(item => {
      return (
        <div className='font-normal relative left-4'>{item}<br/></div>
      )
    })}
  </div>
  )
}

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
      <div className="h-[75vh] w-3/4 grid grid-cols-1 place-content-center relative text-left" data-aos="fade-right"> 
        <div className="text-5xl font-bold" >Projects</div>
        <BulletSection
          title={'Database Research Chatbot – UW/ACEP Capstone'}
          date={'Jan \'24 – May \'24'}
          subtitles={[]}
          bullets={['•	Collaborated with 7 team members to develop an open source full-stack research assistant chatbot application',
                    '•	Leveraged a large language model to generate prompt responses with context from a large PDF database',
                    '•	Constructed a Pythonic data pipeline which uses optical character recognition to convert PDF documents into JSON documents for vectorization',
                    '•	Designed frontend user interface using React',
                    '•	Deployed LLM query service on Google Cloud Run to listen for HTTP requests from the website',
                    '• Check out the free, open-source code here!'
                  ]}/>
        <BulletSection
          title={'Aaronbot – Personal Full-stack LLM Project'}
          date={'Jul \‘24 – Present'}
          subtitles={[]}
          bullets={['•	Currently training and tuning an open-source LLM backend to impersonate me',
                    '•	Designing and developing a frontend interface for users to interact with “me”'
                  ]}/>
        <BulletSection
          title={'Arduino Tetris Machine – UW Embedded Systems and RTOS'}
          date={'Feb \‘24'}
          subtitles={[]}
          bullets={['•	Designed and programmed a Tetris game on Arduino with FreeRTOS, a preemptive real-time scheduler'
                  ]}/>
        <BulletSection
          title={'K-in-a-Row Game-playing Agent – UW Intro to AI'}
          date={'Nov \‘23'}
          subtitles={[]}
          bullets={['•	Developed an adversarial search algorithm in C for playing K-in-a-Row',
                    '•	Won the class-wide tournament and received extra credit'
                  ]}/>
        <BulletSection
          title={'Catformer – Personal Unity Project'}
          date={'Aug \‘23 – Present'}
          subtitles={[]}
          bullets={['•	Developing Catformer, a 2D platformer game personal project with state-of-the-art platformer physics programmed in C# with Unity'
                  ]}/>
      </div>
      <div className="h-[75vh] w-3/4 grid grid-cols-1 place-content-center relative text-left" data-aos="fade-right"> 
        <div className="text-5xl font-bold" >Education</div>
        <BulletSection
          title={'University of Washington, College of Engineering'}
          date={'Sep \‘20 – Jun \'24'}
          subtitles={['Bachelor of Science in Electrical and Computer Engineering',
                      'Notable coursework:' ]}
          bullets={['•	Data Structures and Algorithms',
                    '•	Design of Digital Circuits and Systems',
                    '•	Computer Architecture I, II',
                    '•	Embedded Systems and RTOS',
                    '•	Network Security and Cryptography',
                    '•	Software Development'
                  ]}/>
      </div>
      <div className="h-[75vh] w-3/4 grid grid-cols-1 place-content-center relative text-left" data-aos="fade-right"> 
        <div className="text-5xl font-bold" >Work Experience</div>
        <BulletSection
          title={'Programming Teacher – CS Wonders, Redmond'}
          date={'Jun \'20 – Sep \'23'}
          subtitles={[]}
          bullets={['•	Taught Python programming skills to summer classes',
                    '•	Helped create exercises on the course website',
                    '•	Prepared lessons designed to maximize student comprehension and retention'
                  ]}/>
        <BulletSection
          title={'Operations Analyst – Pactera EDGE, Microsoft, Redmond'}
          date={'Nov \'21 – Jun \'22'}
          subtitles={[]}
          bullets={['•	Reviewed suspicious activity on Microsoft Azure, identifying and flagging accounts needing further inspection',
                    '•	Worked around the clock with teammates in Europe and Asia to ensure swift termination of fraudulent accounts'
                  ]}/>
        <BulletSection
          title={'Hardware Test Engineer Intern – Pactera EDGE, Microsoft, Redmond'}
          date={'Jun \'20 – Sep \'20'}
          subtitles={[]}
          bullets={['•	Worked closely with a prototype model of Microsoft Surface Headphones',
                    '•	Ran extensive test cases and compiled performance reports, going into detail about any bugs or issues',
                    '•	Conducted market research and composed a competitive analysis report'
                  ]}/>
      </div>
      <div className='h-[12.5vh]'></div>
    </div>
  )
}
