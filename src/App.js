import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Report from "./components/holdingsandpositions/Report.tsx";
import Home from "./components/holdingsandpositions/Home.tsx";
import AddNews from "./components/newsmanagement/AddNews.tsx";
import ViewNews from "./components/newsmanagement/ViewNews.tsx";

function App() {
  return (

    <div className="App">
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path={"/Report"} element={<Report />} />
                <Route exact path={"/AddNews"} element={<AddNews />} />
                <Route exact path={"/ViewNews"} element={<ViewNews />} />

            </Routes>
        </Router>



    </div>
  );
}

export default App;
