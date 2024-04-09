import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Loader from 'react-loaders';
import { useState } from 'react';
//import Input from 're'
 

const Contact =()=> {
    const[letterClass ] =useState('text-animate')
    //const refForm =useRef

    return(
        <>
        <div className="container contact-page">
            <div className='text-zone'>
            <h1>
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={['C','o','n','t','a','c','t',' ','m','e']}
                idx={15}
                 />
            </h1>
            <p>
            🌟 Ready to elevate your frontend development skills? 🚀 Looking for exciting internship opportunities or engaging freelance projects? Look no further! With a passion for crafting immersive user experiences and a knack for cutting-edge technologies, I'm eager to delve into the world of frontend development. Whether it's refining user interfaces, optimizing website performance, or breathing life into captivating designs, I'm here to make your digital dreams a reality. If you have an exciting internship opportunity or a thrilling freelance project that could benefit from my expertise, I'd love to hear from you! Feel free to reach out using the form below. Let's collaborate and create something extraordinary together! 🎨💻
            </p>
            <div className='contact-form'>
                <form>
                    <ul>
                        <li className='half'>
                            <input type='text' 
                            name="name" 
                            placeholder="Name" 
                            required />
                        </li>
                        <li className='half'>
                            <input type='email' name="email" placeholder="Email" required />
                        </li>
                        <li>
                            <input placeholder="Subject" type='text' name="Subject" required/>
                        </li>
                        <li>
                            <textarea placeholder="Message" required></textarea>
                        </li>
                        <li>
                           <input type="submit" className='flat-button' value="SEND" />
                        </li>
                    </ul>

                </form>
            </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}
export default Contact


