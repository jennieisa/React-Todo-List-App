import './App.css';
import {Routes, Route} from 'react-router-dom';

//Page components
import LandingPage from './pages/LandingPage';
import TodoPage from './pages/TodoPage';
import AboutPage from './pages/AboutPage';


function App() {
  return (
    <div className="App App-header">
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/todos' element={<TodoPage />} />
      </Routes>
    </div>
  );
}

export default App;
