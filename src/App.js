import './App.css';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Header from './components/Header';
import Articles from './components/Articles';
import TopicsList from './components/TopicsList';
import IndividualArticle from './components/IndividualArticle';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <TopicsList />
      <Routes>
        <Route path='/' element={<Navigate to='/articles' />}/>
        <Route path='/articles' element={<Articles />}/>
        <Route path='/topics/:topic_slug' element={<Articles />}/>
        <Route path='/articles/:article_id' element={<IndividualArticle />} />
      </Routes>
    </div>
   </BrowserRouter>
  );
}

export default App;
