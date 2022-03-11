import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Articles from './components/Articles';
import TopicsList from './components/TopicsList';
import IndividualArticle from './components/IndividualArticle';
import { useState } from 'react';
import { UserContext } from './contexts/UserContext'
import Error404 from './components/Error404';

function App() {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginFailure, setLoginFailure] = useState(false);

  return (
    <UserContext.Provider value={{ 
          username, 
          setUsername,
          isLoggedIn,
          setIsLoggedIn,
          loginFailure,
          setLoginFailure }}>
    <BrowserRouter>
    <div className="App">
      <Header />
      <TopicsList />
      <Routes>
        <Route path='/' element={<Navigate to='/articles' />}/>
        <Route path='/articles' element={<Articles />}/>
        <Route path='/topics/:topic_slug' element={<Articles />}/>
        <Route path='/articles/:article_id' element={<IndividualArticle />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
   </BrowserRouter>
   </UserContext.Provider>
  );
}

export default App;
