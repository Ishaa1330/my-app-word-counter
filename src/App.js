// import logo from './logo.svg';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Comp1/Navbar';


import TextForm from './Comp1/TextForm';
import About from './Comp1/About';
import React, { useState } from 'react';
import Alert from './Comp1/Alert';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// let name="isha";
function App() {
 const [mode, setMode] =  useState('light'); // whether darkmode is enabled or not
const [alert, setAlert]= useState(null);

const showAlert =(message, type) => {            // OBJECT CREATION
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(()=>{
    setAlert(null);

  } , 1000)
}
// const removeBodyClass=()=>{
//   document.body.classList.remove('bg-light')
//   document.body.classList.remove('bg-dark')
//   document.body.classList.remove('bg-primary')
//   document.body.classList.remove('bg-success')
//   document.body.classList.remove('bg-warning')
//   document.body.classList.remove('bg-danger')
// }

//  const toggleMode = (cls)=>{
  // removeBodyClass();
  // document.body.classList.add('bg-'+cls)
  
   const toggleMode = ()=>{
  if(mode ==='light'){
    setMode('dark');
    document.body.style.backgroundColor ='#042743';
    showAlert("dark mode enabled","success");
    // document.title='Text Manipulator- Dark mode';
    // setInterval(()=>{
    //   document.title='word counter is amazing';
    // },2000);
    //  setInterval(()=>{
    //   document.title='install now';
    // },1500);

  }
  else{
    setMode('light');
    document.body.style.backgroundColor ='white';
    showAlert("light mode enabled","success");
    // document.title='Text Manipulator- Light mode';

  }
 }

  return (
<>
{/* <Navbar title="navbar section" home="navbar ka home"/> */}
          
            {/* // will give default value  */}
{/* <Navbar /> */}

<Router>

<Navbar title= "Yours App"  mode={mode}  toggleMode={toggleMode} home="Home-event"  abouttext= "About us" />;
<Alert alert={alert} />

<div className="container my-3">

 <Routes>
            
        <Route  exact path="/about" element={<About mode={mode} />}/>
            
             <Route exact path="/" element={ <TextForm showAlert={showAlert} heading="Play with text" mode={mode}/>}/>

 {/* <TextForm showAlert={showAlert} heading="Enter text below to analyze , It is a word counter  " mode={mode} /> */}
         

   </Routes>
</div>
   </Router>
</>
 );
}

export default App;




 
