import React from "react";
import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import Dashboard from "./components/dashboard/Dashboard";
import OrderStatus from "./components/dashboard/orders/OrderStatus";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Wrapper>
              <AppHeader>
                <Header />
              </AppHeader>
              <AppBody>
                <Dashboard />
              </AppBody>
            </Wrapper>
          }
        />
        <Route
          path="/orderstatus"
          element={
            <Wrapper>
              <AppHeader>
                <Header />
              </AppHeader>
              <AppBody>
                <OrderStatus />
              </AppBody>
            </Wrapper>
          }
        />
      </Routes>
    </Router>
  );
}

const Wrapper = styled.div``;
const AppHeader = styled.div``;
const AppBody = styled.div`
  padding: 20px;
`;
export default App;
