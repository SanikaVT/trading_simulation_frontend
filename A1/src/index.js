import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ResponsiveAppBar from './components/AppBar'
import LeagueList from './components/LeagueList'
import SearchBar from "./components/SearchBar";

 const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResponsiveAppBar />
    <SearchBar />
    <LeagueList />
  </React.StrictMode>
);

reportWebVitals();
