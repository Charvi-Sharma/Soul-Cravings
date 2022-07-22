import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Post from './components/Post';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Compose from './components/pages/Compose';
import Contact from './components/pages/Contact';


function App() {
  return (
    <div className="App">
    <Router>
     <Header />
     <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/compose' element={<Compose />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/posts/:postId' element={<Post />}/>
     </Routes>
     <Footer />
    </Router>
      
    </div>
  );
}

export default App;
