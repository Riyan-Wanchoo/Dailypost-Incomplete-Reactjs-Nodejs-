import React, {useState} from 'react'
import LoadingBar from 'react-top-loading-bar'
//Component imports
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AdminLog from "./components/AdminLog";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound"
// import Footer from "./components/Footer";
// Category imports
import Slug from "./categories/Slug";
import Category from "./categories/Category";
// Router imports
import { Routes, Route } from "react-router-dom";

function App() {
  const [progress, setProgress] = useState(0)
  return (
    <div className="App"style={{height: "100vh"}}>
      <LoadingBar
        // color='#f11946'
        color='#0016f5'
        progress={progress}
        waitingTime={400}
        height={2.3}
        shadow={true}
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home setProgress={setProgress} />} />
        <Route path="/news/india" element={<Category key="India" setProgress={setProgress} category="India"/>} />
        <Route path="/news/world" element={<Category key="World" setProgress={setProgress}  category="World"/>} />
        <Route path="/news/entertainment" element={<Category key="Entertainment" setProgress={setProgress}  category="Entertainment"/>} />
        <Route path="/news/tech" element={<Category key="Technology" setProgress={setProgress}  category="Technology"/>} />
        <Route path="/news/business" element={<Category key="Business" setProgress={setProgress}  category="Business"/>} />
        <Route path="/news/health" element={<Category key="Health" setProgress={setProgress}  category="Health"/>} />
        <Route path="/news/sports" element={<Category key="Sports" setProgress={setProgress}  category="Sports"/>} />
        <Route path="/news/science" element={<Category key="Science" setProgress={setProgress}  category="Science"/>} />
        <Route path="/news/travel" element={<Category key="Travel" setProgress={setProgress}  category="Travel"/>} />
        <Route path="/news/:category/:slug" element={<Slug setProgress={setProgress} />} />
        <Route exact path="/admin/login" element={<AdminLog setProgress={setProgress} />} />
        <Route exact path="/admin/dashboard" element={<Dashboard setProgress={setProgress} />} />
        <Route path='*' element={<NotFound setProgress={setProgress}/>} />
      </Routes>
    </div>
  );
}

export default App;
