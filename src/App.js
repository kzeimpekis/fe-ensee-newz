import './App.css';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Header from './components/Header';
import Articles from './components/Articles';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to='/articles' />}/>
        <Route path='/articles' element={<Articles />}/>
      </Routes>
    </div>
   </BrowserRouter>
  );
}

export default App;
