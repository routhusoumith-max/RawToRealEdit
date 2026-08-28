import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import HireMe from "./components/HireMe";
import Workflow from "./components/Workflow";
import InquiryForm from "./components/InquiryForm";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <About />
        <Workflow />
        <InquiryForm />

        <HireMe />
        <Contact />
      </main>

      <footer>
        <p>© 2026 soumith. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
