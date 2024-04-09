import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/Logo.png';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo'
import { useState } from 'react';
import Loader from 'react-loaders';



const HOME =() => {
    const[letterClass] =useState('text-animate')
    const nameArray=['a','h','a','n','a']
    const jobArray =['w','e','b',' ','d','e','v','e','l','o','p','e','r','.']

//useEffect(() => {
 //  return setTimeout (() => {
 //setLetterClass('text-animate-hover')
 //},4000)
  //},[])

return(
  <>
    <div className="container home-page">
        <div className="text-zone">
            <h1>
                <span className={letterClass} >H</span>
                <span className={`${letterClass} _12`} >i,</span>

              <br/>
              <span className={`${letterClass} _13`} >I</span>
              <span className={`${letterClass} _14`} >'m</span>


              <img src={LogoTitle} alt='developer' />
              <AnimatedLetters letterClass={letterClass}
              strArray={nameArray}
              idx={15}/>
            <br />
            <AnimatedLetters letterClass={letterClass}
              strArray={jobArray}
              idx={15}/>
            </h1>
            <h2>Frontend Developer👩‍💻 | Web3.0 Enthusiast🔗 | UI/UX  Designer🎨</h2>
            <Link to="/contact" className='flat-button'>CONTACT ME</Link>
        </div>
        <Logo />
    </div>
    <Loader type="pacman" />
    </>
)
}

export default HOME