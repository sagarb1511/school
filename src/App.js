import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./component/pages/home";
import Navbar from "./component/pages/Navbar";
import Aboutus from "./component/pages/Aboutus";
import Vision from "./component/pages/Vision";
import Achievements from "./component/pages/Achievements";
import FacultyForm from "./component/pages/FacultyForm";
import NonTeachingStaff from "./component/pages/Nonteaching";
import Acadmic from "./component/pages/Acadmic";
import Gallery from './component/pages/Gallery';
import Admission from './component/pages/Admission';
import NSS from './component/pages/nss';
import Sports from './component/pages/Sports';
import PublicationsList from './component/pages/Publications';
import ContactUs from './component/pages/contact';
import Activities from './component/pages/activities';
import Footer from './component/pages/Footer';

function App() {
  return (
   <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/school/about" element={<Aboutus />} />
        <Route path="/school/vision" element={<Vision />} />
        <Route path="/school/achivement" element={<Achievements />} />
        <Route path="/school/faculty" element={<FacultyForm />} />
        <Route path="/school/nonteaching" element={<NonTeachingStaff />} />
        <Route path="/school/acadmice" element={<Acadmic />} />
        <Route path="/school/gallery" element={<Gallery />} />
        <Route path="/school/admission" element={<Admission />} />
        <Route path="/school/nss" element={<NSS />} />
        <Route path="/school/sports" element={<Sports />} />
        <Route path="/school/publications" element={<PublicationsList />} />
        <Route path="/school/contact" element={<ContactUs />} />
        <Route path="/school/activitie" element={<Activities  />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
