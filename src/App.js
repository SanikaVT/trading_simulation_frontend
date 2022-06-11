import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Report from "./components/Report";
import Home from "./components/Home";

function App() {
  return (

    <div className="App">
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />

                <Route exact path={"/Report"} element={<Report />} />

            </Routes>
        </Router>



    </div>
  );
}

export default App;
