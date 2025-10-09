
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
        <Route path="/school/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/achivement" element={<Achievements />} />
        <Route path="/faculty" element={<FacultyForm />} />
        <Route path="/nonteaching" element={<NonTeachingStaff />} />
         <Route path="/acadmice" element={<Acadmic />} />
         <Route path="/gallery" element={<Gallery />} />
         <Route path="/admission" element={<Admission />} />
         <Route path="/nss" element={<NSS />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/publications" element={<PublicationsList />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/activitie" element={<Activities  />} />

        


      </Routes>
     <Footer/>
    </Router>
  );
}

export default App;
