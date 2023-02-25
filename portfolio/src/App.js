import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Main } from "./components/projects/Main";
import { Calculator } from "./components/projects/calculator/Calculator";
import Employeeys from "./components/projects/employees/Employeeys";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes >
           <Route path="/" element={<Main/>}/>
           <Route path="/calculator" element={<Calculator/>}/>
           <Route path="/stopwatch" element={<Employeeys/>}/>
        </Routes>
 
    <Footer />    
      </BrowserRouter>


 

    </div>
  );
}

export default App;
