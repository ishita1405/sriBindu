import React from 'react'
import {Routes,Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Puja from "./pages/Puja/Puja";
import Gallery from "./pages/Gallery/Gallery";
import Video from "./pages/Video/Video";
import Dan from "./pages/Dan/Dan"
import ShivlingStapana from './pages/ShivlingStapana/ShivlingStapana';

// import Video  from "./pages/Video/Video";
// import Dan from "./pages/Dan/Dan"
const App = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='Puja' element={<Puja />} />
        <Route path='Gallery' element={<Gallery />} />
        <Route path='Video' element={<Video />}/>
        <Route path='Dan' element={< Dan />} />
        <Route path='ShivlingStapana' element={<ShivlingStapana />} />

       
    </Routes>
      
    </>
  )
}

export default App


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/navbar/Navbar";
// import Home from "./pages/Home/Home";
// import Footer from "./components/Footer/Footer";
// import Puja from "./pages/Puja/Puja";
// // import Gallery from "./pages/Gallery";
// // import Video from "./pages/Video";
// // import Dan from "./pages/Dan";
// // import ShivlingSthapana from "./pages/ShivlingSthapana";
// // import NotFound from "./pages/NotFound";

// function App() {
//   return (
//     <Router>
//       <div className="app-layout">
//         <Navbar />

//         <main className="app-content">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/puja" element={<Puja />} />

//             {/* Future Routes
//             <Route path="/gallery" element={<Gallery />} />
//             <Route path="/video" element={<Video />} />
//             <Route path="/dan" element={<Dan />} />
//             <Route path="/shivling-sthapana" element={<ShivlingSthapana />} />
//             <Route path="*" element={<NotFound />} />
//             */}
//           </Routes>
//         </main>

//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;