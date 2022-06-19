import './App.css';
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import CategoryPage from './components/CategoryPage/CategoryPage';
import PostPage from './components/PostPage/PostPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Navigate to='/home'/>} />
          <Route path='/home' element={<Home />} />
          <Route path='/:category' element={<CategoryPage />} />
          <Route path='/category/:category/:id' element={<PostPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;