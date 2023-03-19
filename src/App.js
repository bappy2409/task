import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Reg from "./components/Reg/Reg";
import LogIn from "./components/LogIn/LogIn";
//Simport Service from "./components/Service/Service";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Footer from "./components/Footer/Footer";
import Blog from "./components/Blog/Blog";
import Services from "./components/Services/Services";
import ErrorPage from "./components/ErrorPage/ErrorPage";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/home" element={<Home />} />

        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/blog"
          element={
            <RequireAuth>
              <Blog />
            </RequireAuth>
          }
        />
        <Route path="/reg" element={<Reg />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
