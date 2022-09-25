import Navbar from "./Components/Navbar/Navbar";
import ContainerOne from "./Components/ContainerOne/ContainerOne";
import ContainerTwo from "./Components/ContainerTwo/ContainerTwo";
import ContainerThree from "./Components/ContainerThree/ContainerThree";
import ContainerFour from "./Components/ContainerFour/ContainerFour";

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
      <hr id = 'demo'></hr>
      

    </div>
  );
}

export default App;
