import Navbar from "./Components/Navbar/Navbar";
import ContainerOne from "./Components/ContainerOne/ContainerOne";
import ContainerTwo from "./Components/ContainerTwo/ContainerTwo";
import ContainerThree from "./Components/ContainerThree/ContainerThree";
import ContainerFour from "./Components/ContainerFour/ContainerFour";
import Footer from "./Components/Footer/Footer";
import './App.css';
function App() {
  return (
    <div className="container-all">
      <Navbar/>
      <ContainerOne/>
      <hr id="yourContentIdHere"></hr>
      <ContainerTwo/>
      <ContainerThree/>
      <hr id = 'demo'></hr>
      <ContainerFour/>
      <Footer/>
    </div>
  );
}

export default App;
