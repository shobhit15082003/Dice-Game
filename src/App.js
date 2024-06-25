import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import Play from './components/Play';
import { Routes,Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
   <div>
    {/* <Homepage></Homepage>
    <Play></Play> */}
    <ToastContainer />

    <Routes>
      <Route path="/" element={<Homepage></Homepage>}></Route>
      <Route path='/play' element={<Play></Play>}></Route>
    </Routes>

   </div>
  );
}

export default App;
