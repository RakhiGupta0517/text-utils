
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  const[mode, setMode] = useState('light')
  const[alert, setAlert]= useState(null)

  const showAlert = (messge, type)=>{
    setAlert({
      msg:messge,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
 

 <> 
 <Router>
<Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<Routes>
       <Route path="/About" 
     element ={<About mode={mode}/>}>
       </Route>
       <Route path="/" element ={<Textform
        heading =" Try Textutils-word Counter, Character counter, Remove extra spaces" mode={mode}
        showAlert={showAlert}/>}>
         
       </Route>
     </Routes>
     </div>
     </Router>
</> 
  );
}

export default App;
