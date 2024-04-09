import './App.scss';
import { Routes, Route} from  'react-router-dom'
import Layout  from "./components/Layout"
import HOME from './components/HOME'
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HOME />} />
         <Route path="about" element={<About />}/>
         <Route path="contact" element={<Contact />}/>

        
        </Route>
      </Routes>
    </>
  
  )
}


export default App
