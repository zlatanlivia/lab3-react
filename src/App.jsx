import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Footer/Footer'
import Home from './Home/Home'
import Navbar from './NavBar/NavBar'
import Info from './Info/Info'
import Sport from './Sport/Sport'
import Location from './Location/Location'
import Eveniment from './Eveniment/Eveniment'
import Parteneri from './Parteneri/Parteneri'
import TenisCampPage from './TenisCampPage/TenisCampPage'; 
import EventsPage from './EventsPage/EventsPage';
import './index.css'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Info />
            <Sport />
            <Location />
            <Eveniment />
            <Parteneri />
          </>
        } />
        <Route path="/tenis-camp" element={<TenisCampPage />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App
