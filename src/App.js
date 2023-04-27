import { Route, Routes } from 'react-router-dom';
import SignUP from './components/pages/signup';
 
function App() {
  return (
    <div>
      <Routes>
      <Route path = '/' element= {<SignUP/>}/>
     </Routes>
    </div>
  );
}

export default App;
