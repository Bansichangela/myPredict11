import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/index.js";
import "./css/index.css";
import AboutPage from "./pages/about/AboutPage.js";
import ContactPage from "./pages/contact/ContactPage.js";
import PrivacyPage from "./pages/privacy/index.js";
import TermsConditionpage from "./pages/terms/TermsConditionpage.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/contact" Component={ContactPage} />
        <Route path="/privacy" Component={PrivacyPage} />
        <Route path="/condition" Component={TermsConditionpage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
