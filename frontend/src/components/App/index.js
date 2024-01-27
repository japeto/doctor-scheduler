import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../Home";
import Login from "../Login";
import Calendar from "../MyCalendar";
import Forbidden from "../Forbidden";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/mycalendar' element={<Calendar/>} />
          <Route path='*' element={<Forbidden/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
