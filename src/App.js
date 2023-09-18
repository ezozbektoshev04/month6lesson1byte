import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Product from "./components/product/Product";
import Strategies from "./components/strategies/Strategies";
import Pricing from "./components/pricing/pricing";
import About from "./components/about/About";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Product />
      <Strategies />
      <Pricing />
      <About />
      <Footer />
    </div>
  );
}

export default App;
