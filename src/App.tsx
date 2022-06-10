import React from "react";
import "./App.css";
import styled from "styled-components";
import Header from "./components/header/Header";
import Home from "./components/dashboard/Home";
import OrderStatus from "./components/orders/OrderStatus";
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
                <Home />
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
