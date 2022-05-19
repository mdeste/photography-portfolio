import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import FourPhotographs from './pages/FourPhotographs'
import InteriorExterior from './pages/InteriorExterior'
import ToDivertWater from './pages/ToDivertWater'
import Projects from './pages/Projects'
import RecentWork from './pages/RecentWork'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<RecentWork />} />
        <Route path='/*' element={<NotFound />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/fourphotographs' element={<FourPhotographs />} />
        <Route path='/interiorexterior' element={<InteriorExterior />} />
        <Route path='/todivertwater' element={<ToDivertWater />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
