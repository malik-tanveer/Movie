import { Route, Routes } from 'react-router-dom'; 
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Footer from './components/Footer';
import Dramas from './pages/Dramas';
import Navbar from './components/Navbar';
import DramaDetails from './pages/DramaDetails';
import Movies from './pages/Movies';
import NotFound from './pages/404';
import About from './components/About';
// import Contact from './components/Contact';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Contact" element={<Contact />} /> */}
        <Route path="/About" element={<About />} />
        <Route path="/movie/:id" element={<MovieDetails />} /> 
        <Route path="/Movies" element={<Movies />} /> 
        <Route path="/drama/:id" element={<DramaDetails />} />
        <Route path="/Drama" element={<Dramas/>}/>
         <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </>
  );
}
export default App;