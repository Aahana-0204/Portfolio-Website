import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular,faCss3,faGitAlt,faHtml5,  faReact, faPython }
  from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
const About = () => {
    const[letterClass ] =useState('text-animate')
    //useEffect(() => {
      //  return setTimeout (() => {
      //  setLetterClass('text-animate-hover')
      //   },3000)
       // },[])

    return(
        <> 
    
          <div className="container about-page">
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['A','b','o','u','t',' ','m','e']}
                    idx={15}
                     />
                </h1>
                <p>In the ever-evolving landscape of technology, I stand as a passionate explorer, driven by the promise and potential of Web 3.0, Blockchain, and AI/ML. As a sophomore in Btech, I've embarked on a thrilling journey to merge creativity with functionality, honing my skills as a UI/UX Designer and Frontend Developer specializing in React.js. With each line of code and every pixel perfected, I strive to craft digital experiences that seamlessly integrate innovation and user-centric design, setting the stage for the next generation of interactive platforms.</p>
                <p>In my relentless pursuit of knowledge and mastery, I am currently immersing myself in the depths of MERN Stack development, adding yet another powerful tool to my arsenal. Through this endeavor, I aim to not only expand my technical expertise but also to push the boundaries of what's possible in the realm of web applications. Simultaneously, I'm sharpening my problem-solving abilities in data structures and algorithms, recognizing their pivotal role in creating robust, scalable solutions that stand the test of time.</p>
                <p>As I navigate the intricate intersection of art and technology, my vision extends far beyond the confines of the present. I envision a future where cutting-edge technologies converge to reshape industries, enhance user experiences, and drive positive societal impact. With boundless curiosity and an unwavering dedication to excellence, I am poised to make waves in the ever-changing landscape of tech, leaving an indelible mark on the digital world and beyond.</p>
            </div>
            <div className="stage-cube-cont">
                <div  className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faAngular} color="#DD031" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faCss3} color="#F06529" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faGitAlt} color="#28A4D9" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faHtml5} color="#5ED4F4" />
                    </div>
                    
                    <div className="face5">
                        <FontAwesomeIcon icon={faReact} color="#EC4" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faPython} color="#00008b" />
                    </div>
                    
                </div>
            </div>
            </div>
            <Loader type="pacman" />
            </>
    )
}

export default About