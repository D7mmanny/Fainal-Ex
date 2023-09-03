import './App.css'
import Home from './Pages/Home'
import  {Route,Routes}from "react-router-dom"
import SingUp from './Pages/SingUp'
import Lpgin from './Pages/Login'



function App() {
 

  return (
    <>
      <Routes>
      <Route path='/' element={<Lpgin/>}/>
      <Route path='/singup' element={<SingUp/>}/>
        <Route path='/home' element={<Home/>}/> 
      </Routes>

    </>
  )
}

export default App
