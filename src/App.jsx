import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import Header from "./components/header/Header";
import Home from "./components/dashboard/Home";
import OrderStatus from "./components/orders/OrderStatus";
import SignIn from "./components/signup/SignIn";
import SignUp from "./components/signup/SignUp";
import ForgotPassword from "./components/signup/ForgotPassword";
import RiskAppetite from "./components/signup/RiskAppetite";
import StockLeague from "./components/stockLeague/StockLeaguePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserDetail from "./components/user_profile/UserDetalsContainer";
import FooterComp from "./components/footer/FooterComp";
import Report from "./components/holdingsandpositions/Report.tsx";
import HoldingsHome from "./components/holdingsandpositions/HoldingsHome.tsx";
import ViewNews from "./components/newsmanagement/ViewNews.tsx";

function App() {
  const [isActive, setIsActive] = useState(false);

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

              <Home />

              <FooterComp />
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
              <FooterComp />
            </Wrapper>
          }
        />
        <Route
          path="/profile"
          element={
            <Wrapper>
              <AppHeader>
                <Header />
              </AppHeader>
              <AppBody>
                <UserDetail />
              </AppBody>
              <FooterComp />
            </Wrapper>
          }
        />

        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
        <Route path="/riskappetite" element={<RiskAppetite />}></Route>
        <Route exact path="/Holdings" element={<HoldingsHome />} />
        <Route exact path={"/Report"} element={<Report />} />
        <Route exact path={"/News"} element={<ViewNews />} />
        <Route
          path="/stockLeague"
          element={
            <Wrapper>
              <AppHeader>
                <Header />
              </AppHeader>
              <AppBody>
                <StockLeague />
              </AppBody>
            </Wrapper>
          }
        />
      </Routes>
    </Router>
  );
}

const Wrapper = styled.div`
`;
const AppHeader = styled.div``;
const AppBody = styled.div`
  padding: 20px;
`;
export default App;
