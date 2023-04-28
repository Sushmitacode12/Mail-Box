import { Route, Routes } from 'react-router-dom';
import SignUP from './components/pages/SignUp';
import Login from './components/pages/Login';
import Welcome from './components/pages/Welcome';
import Inbox from './components/pages/Inbox';
function App() {
  return (
    <div style={{backgroundColor:'lightgreen'}}>
      <Routes>
      <Route path='/' element = {<Login/>}/>
      <Route path = '/signup' element= {<SignUP/>}/>
      <Route path = '/welcome' element = {<Welcome/>}/>
      <Route path='/inbox' element = {<Inbox/>}/>
     </Routes>
    </div>
  );
}

export default App;
