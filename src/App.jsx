import { motion, useScroll, MotionValue, useSpring, useTransform } from 'framer-motion';
import './App.css'
// import image, { Image } from 'react-native';

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function TestScroll() {
  const scrollYProgress = useScroll();
  const parallaxScroll = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <motion.h2 
      style={{ scaleX: parallaxScroll }} 
      >
        Scroll me!
      </motion.h2>
      Scroll me!
    </section>
  );
}

function App() {
  const scrollY = useScroll().scrollYProgress;
  const y1 = useTransform(scrollY, [0, 1], [-0, -150]);
  const y2 = useTransform(scrollY, [0, 1], [-0, -300]);
  return (
    <article className='scroll'>
        <section className='page'> 
          <motion.h1
          initial={{ opacity: 0, y: -150 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 4, type: "spring" }} 
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
          dragElastic={0.1}
          style={{y: y1}}>Hello, I'm Aaron Hong</motion.h1>

          {/* <motion.h1 style={{ scaleX: scroll.scrollYProgress }}>Scroll me!</motion.h1> */}
          <motion.p
          style={{y: y2}}>Nice to meet you<br/>Scroll down to learn more about me</motion.p>
          {/* <Image source={""}/> */}
        </section>
        <section className='page'>
          <h1>New header</h1>
        </section>
        <section className='page'>
          <h1>New header 2</h1>
        </section>

        </article>
  )
}

export default App
