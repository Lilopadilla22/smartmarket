import './assets/css/bootstrap.css';
import { BrowserRouter } from "react-router-dom"
import NavBar from './components/NavBar';
import Container from "./components/Container"
import "./assets/css/style.css"


function App() {
  return (
    <BrowserRouter>
     
        <NavBar/>
        <Container/>
      
    </BrowserRouter>
  );
}

export default App;
