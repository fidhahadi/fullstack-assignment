import './App.css';
import Banner from './components/Banner';
import CardGallery from './components/CardGallery';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />

      <CardGallery />
      <Footer />

    </div>
  );
}

export default App;
