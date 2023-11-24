// import logo from './logo.svg';
// import './App.css';
import './assets/css/style.css'
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Menu from './components/Menu';
import Navbar from "./components/Navbar";
import Products from './components/Products';
import Review from './components/Review';


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Products />
      <Review />
      <Contact />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
