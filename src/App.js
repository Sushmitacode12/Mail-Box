import { Route, Routes } from 'react-router-dom';
//import SignUP from './components/pages/signup';
import Login from './components/pages/Login';
import Welcome from './components/pages/Welcome';
function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element = {<Login/>}/>
      {/* <Route path = '/signup' element= {<SignUP/>}/> */}
      <Route path = '/welcome' element = {<Welcome/>}/>
     </Routes>
    </div>
  );
}

export default App;
