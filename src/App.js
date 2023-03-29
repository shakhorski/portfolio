import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Main } from "./components/projects/Main";
import { Quiz } from "./components/projects/quiz/Quiz";
import { Calculator } from "./components/projects/calculator/Calculator";
import Employeeys from "./components/projects/employees/Employeeys";
import { Currency } from "./components/projects/currency/Currency";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes >
           <Route path="/" element={<Main/>}/>
           <Route path="/calculator" element={<Calculator/>}/>
           <Route path="/employees" element={<Employeeys/>}/>
           <Route path="/quiz" element={<Quiz/>}/>
           <Route path="/currency" element={<Currency/>}/>
        </Routes>
 
    <Footer />    
      </BrowserRouter>


 

    </div>
  );
}

export default App;
