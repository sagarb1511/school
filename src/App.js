
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from "./component/pages/home";
// import Navbar from "./component/pages/Navbar";
// import Aboutus from "./component/pages/Aboutus";
// import Vision from "./component/pages/Vision";
// import Achievements from "./component/pages/Achievements";
// import FacultyForm from "./component/pages/FacultyForm";
// import NonTeachingStaff from "./component/pages/Nonteaching";
// import Acadmic from "./component/pages/Acadmic";
// import Gallery from './component/pages/Gallery';
// import Admission from './component/pages/Admission';
// import NSS from './component/pages/nss';
// import Sports from './component/pages/Sports';
// import PublicationsList from './component/pages/Publications';
// import ContactUs from './component/pages/contact';
// import Activities from './component/pages/activities';
// import Footer from './component/pages/Footer';

// function App() {
//   return (
//    <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<Aboutus />} />
//         <Route path="/vision" element={<Vision />} />
//         <Route path="/achivement" element={<Achievements />} />
//         <Route path="/faculty" element={<FacultyForm />} />
//         <Route path="/nonteaching" element={<NonTeachingStaff />} />
//          <Route path="/acadmice" element={<Acadmic />} />
//          <Route path="/gallery" element={<Gallery />} />
//          <Route path="/admission" element={<Admission />} />
//          <Route path="/nss" element={<NSS />} />
//           <Route path="/sports" element={<Sports />} />
//           <Route path="/publications" element={<PublicationsList />} />
//           <Route path="/contact" element={<ContactUs />} />
//           <Route path="/activitie" element={<Activities  />} />

        


//       </Routes>
//      <Footer/>
//     </Router>
//   );
// }

// export default App;


// import { HashRouter as Router, Routes, Route } from 'react-router-dom';  
// import Home from "./component/pages/home";
// import Navbar from "./component/pages/Navbar";
// import Aboutus from "./component/pages/Aboutus";
// import Vision from "./component/pages/Vision";
// import Achievements from "./component/pages/Achievements";
// import FacultyForm from "./component/pages/FacultyForm";
// import NonTeachingStaff from "./component/pages/Nonteaching";
// import Acadmic from "./component/pages/Acadmic";  // Assuming this is your Academics page
// import Gallery from './component/pages/Gallery';
// import Admission from './component/pages/Admission';
// import NSS from './component/pages/nss';
// import Sports from './component/pages/Sports';
// import PublicationsList from './component/pages/Publications';
// import ContactUs from './component/pages/contact';
// import Activities from './component/pages/activities';
// import Footer from './component/pages/Footer';
// import { LanguageProvider } from './context/LanguageContext';
// import Facilitie from './component/pages/Facilities';
// import ApprovedPlace from './component/pages/ApprovedPlace';
// import Adminlogin from './component/admin/login';
// // Add this if you have an Organisation component; otherwise, create a placeholder or remove the link
// // import Organisation from './component/pages/Organisation';  // Uncomment if exists

// function App() {
//   return (
//     <LanguageProvider>
//       <Router basename="/">  
//         <Navbar />
//       <Routes>
//         <Route path="/" element={<><Home /><Footer /></>} />
//         <Route path="/about" element={<><Aboutus /><Footer /></>} />
//         <Route path="/vision" element={<><Vision /><Footer /></>} />
//         <Route path="/achievements" element={<Achievements />} />
//         <Route path="/faculty" element={<><FacultyForm /><Footer /></>} />
//         <Route path="/nonteaching" element={<><NonTeachingStaff /><Footer /></>} />
//         <Route path="/academics" element={<><Acadmic /><Footer /></>} />
//         <Route path="/gallery" element={<><Gallery /> <Footer /></>} />
//         <Route path="/admission" element={<><Admission /><Footer /></>} />
//         <Route path="/nss" element={<><NSS /><Footer /></>} />
//         <Route path="/sports" element={<><Sports /><Footer /></>} />
//         <Route path="/publications" element={<><PublicationsList /><Footer /></>} />
//         <Route path="/contact" element={<><ContactUs /><Footer /></>} />
//         <Route path="/activities" element={<><Activities /> <Footer /></>} />
//          <Route path="/Facilities" element={<><Facilitie /> <Footer /></>} />
//            <Route path="/Approver" element={<><ApprovedPlace /> <Footer /></>} />
//            <Route path="/admin" element={<><Adminlogin /> <Footer /></>} />

//         {/* Add this if you have the component */}
//         {/* <Route path="/organisation" element={<Organisation />} /> */}
//         </Routes>
        
//       </Router>

//     </LanguageProvider>
//   );
// }

// export default App;




import { HashRouter as Router, Routes, Route } from 'react-router-dom';  
import Home from "./component/pages/home";
import Navbar from "./component/pages/Navbar";
import Aboutus from "./component/pages/Aboutus";
import Vision from "./component/pages/Vision";
import Achievements from "./component/pages/Achievements";
import FacultyForm from "./component/pages/FacultyForm";
import NonTeachingStaff from "./component/pages/Nonteaching";
import Acadmic from "./component/pages/Acadmic";  // Assuming this is your Academics page
import Gallery from './component/pages/Gallery';
import Admission from './component/pages/Admission';
import NSS from './component/pages/nss';
import Sports from './component/pages/Sports';
import PublicationsList from './component/pages/Publications';
import ContactUs from './component/pages/contact';
import Activities from './component/pages/activities';
import Footer from './component/pages/Footer';
import { LanguageProvider } from './context/LanguageContext';
import Facilitie from './component/pages/Facilities';
import ApprovedPlace from './component/pages/ApprovedPlace';
import Adminlogin from './component/admin/login';
import Dashboard from './component/admin/dashboard';
import Teacherform from './component/admin/Teacher';
import GalleryForm1 from './component/admin/Gallery';
import Activityform from './component/admin/Activity';
import AchievementForm1 from './component/admin/Achivmentform';
import Dashboard1 from './component/admin/Dashboard1';
import Sport from './component/admin/Sports';
import Activities12 from './component/admin/Activities1';
import Research from './component/admin/Research';


// Add this if you have an Organisation component; otherwise, create a placeholder or remove the link
// import Organisation from './component/pages/Organisation';  // Uncomment if exists

function App() {
  return (
    <LanguageProvider>
      <Router basename="/">  
        {/* Navbar will not show on admin login page */}
        <Routes>
          {/* All regular routes with Navbar and Footer */}
          <Route path="/*" element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<><Home /><Footer /></>} />
                <Route path="/about" element={<><Aboutus /><Footer /></>} />
                <Route path="/vision" element={<><Vision /><Footer /></>} />
                <Route path="/achievements" element={<Achievements />} />
                <Route path="/faculty" element={<><FacultyForm /><Footer /></>} />
                <Route path="/nonteaching" element={<><NonTeachingStaff /><Footer /></>} />
                <Route path="/academics" element={<><Acadmic /><Footer /></>} />
                <Route path="/gallery" element={<><Gallery /> <Footer /></>} />
                <Route path="/admission" element={<><Admission /><Footer /></>} />
                <Route path="/nss" element={<><NSS /><Footer /></>} />
                <Route path="/sports" element={<><Sports /><Footer /></>} />
                <Route path="/publications" element={<><PublicationsList /><Footer /></>} />
                <Route path="/contact" element={<><ContactUs /><Footer /></>} />
                <Route path="/activities" element={<><Activities /> <Footer /></>} />
                <Route path="/Facilities" element={<><Facilitie /> <Footer /></>} />
                <Route path="/Approver" element={<><ApprovedPlace /> <Footer /></>} />
              </Routes>
            </>
          } />
          
          {/* Admin login route without Navbar and Footer */}
          <Route path="/admin" element={<Adminlogin />} />
          
          {/* Admin routes with Sidebar */}
          <Route path="/dashboard1" element={<><Dashboard /><Dashboard1 /></>} />
          <Route path="/teacher" element={<><Dashboard /><Teacherform /></>} />
          <Route path="/Gallery1" element={<><Dashboard /><GalleryForm1 /></>} />
          <Route path="/Activity" element={<><Dashboard /><Activityform /></>} />
          <Route path="/AchievementForm" element={<><Dashboard /><AchievementForm1 /></>} />
          <Route path="/Sports1" element={<><Dashboard /><Sport /></>} />
          <Route path="/Activities1" element={<><Dashboard /><Activities12 /></>} />
          <Route path="/Research" element={<><Dashboard /><Research /></>} />
          {/* Catch-all route */}
          <Route path="*" element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<><Home /><Footer /></>} />
                <Route path="/about" element={<><Aboutus /><Footer /></>} />
                <Route path="/vision" element={<><Vision /><Footer /></>} />
                <Route path="/achievements" element={<Achievements />} />
                <Route path="/faculty" element={<><FacultyForm /><Footer /></>} />
                <Route path="/nonteaching" element={<><NonTeachingStaff /><Footer /></>} />
                <Route path="/academics" element={<><Acadmic /><Footer /></>} />
                <Route path="/gallery" element={<><Gallery /><Footer /></>} />
                <Route path="/admission" element={<><Admission /><Footer /></>} />
                <Route path="/nss" element={<><NSS /><Footer /></>} />
                <Route path="/sports" element={<><Sports /><Footer /></>} />
                <Route path="/publications" element={<><PublicationsList /><Footer /></>} />
                <Route path="/contact" element={<><ContactUs /><Footer /></>} />
                <Route path="/activities" element={<><Activities /><Footer /></>} />
                <Route path="/Facilities" element={<><Facilitie /><Footer /></>} />
                <Route path="/Approver" element={<><ApprovedPlace /><Footer /></>} />
              </Routes>
            </>
          } />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
