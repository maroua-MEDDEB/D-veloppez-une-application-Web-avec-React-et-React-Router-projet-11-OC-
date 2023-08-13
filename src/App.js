import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Housing from "./components/Housing/Housing";
import Error from "./components/Error/Error";
import Apropos from "./components/Apropos/Apropos";
import { Footer, Header } from "./Sections";

const App = () => {
  return (
    <>
      <div className="content-wrapper">
        <Header />
        {/* définir les différens routages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Housing/:id" element={<Housing />} />
          <Route path="/Apropos" element={<Apropos />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
