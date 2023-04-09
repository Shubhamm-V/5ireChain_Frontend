// import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import MenuTop from "./components/Menus/MenuTop";
import Home from "./pages";
import Footer from "./components/Footer/Footer";
import FooterLinks from "./components/Footer/FooterLinks";
function App() {
  return (
    <MenuTop>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
      <FooterLinks/>
    </MenuTop>
  );
}

export default App;
