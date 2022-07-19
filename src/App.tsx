import React, { useEffect, useState } from "react";
import "./App.css";
import splash from "./Splash";
import styled from "styled-components";
import Header from "./components/header/Header";
import Home from "./components/dashboard/Home";
import OrderStatus from "./components/orders/OrderStatus";
import SignIn from "./components/signup/SignIn";
import SignUp from "./components/signup/SignUp";
import WriteBlog from "./components/blog/WriteBlog";
import ForgotPassword from "./components/signup/ForgotPassword";
import RiskAppetite from "./components/signup/RiskAppetite";
import StockLeague from "./components/stockLeague/StockLeaguePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserDetail from "./components/user_profile/UserDetailsContainer";
import FooterComp from "./components/footer/FooterComp";
import ForumComp from "./components/forum/Forum";
import LineChart from "./components/stockAnalytics/analytics";
import Blog from "./components/blog/Blog";
import BlogDetails from "./components/blog/BlogDetails";
import EditBlog from "./components/blog/EditBlog";
import ForgotPasswordOtp from "./components/signup/ForgotPasswordOtp";
import HoldingsHome from "./components/holdingsandpositions/HoldingsHome";
import Report from "./components/holdingsandpositions/Report";
import News from "./components/newsmanagement/News";
import PositionsHome from "./components/holdingsandpositions/PositionsHome";
import Reservation from "./components/appoinment/Reservation";
import Advisor from "./components/appoinment/Advisor";
import Advisors from "./components/appoinment/AdvisorList";
import Information from "./components/appoinment/Information";
import Financials from "./components/stockFinancials/financials";
import Compare from "./components/analyticsComparison/compare";
import Register from "./components/appoinment/SignUp";
import ProtectedRoutes from "./ProtectedRoutes";
import Splash from "./Splash";


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoading ? <Splash/> :<SignIn />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
        <Route
          path="/forgotpasswordotp"
          element={<ForgotPasswordOtp />}
        ></Route>
        <Route path="/riskappetite" element={<RiskAppetite />}></Route>

        <Route element={<ProtectedRoutes />}>
          <Route
            path="/dashboard"
            element={
              <Wrapper>
                <AppHeader>
                  <Header />
                </AppHeader>
                <Home />
                <AppBody>
                  <FooterComp />
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
          <Route
            path="/forum"
            element={
              <Wrapper>
                <AppHeader>
                  <Header />
                </AppHeader>
                <AppBody>
                  <ForumComp />
                </AppBody>
                <FooterComp />
              </Wrapper>
            }
          />

          <Route
            path="/financials"
            element={
              <Wrapper>
                <AppHeader>
                  <Header />
                </AppHeader>
                <AppBody>
                  <Financials />
                </AppBody>
                <FooterComp />
              </Wrapper>
            }
          />

          <Route
            path="/compare"
            element={
              <Wrapper>
                <AppHeader>
                  <Header />
                </AppHeader>
                <AppBody>
                  <Compare />
                </AppBody>
                <FooterComp />
              </Wrapper>
            }
          />

          <Route
            path="/Holdings"
            element={
              <Wrapper>
                <AppHeader>
                  <Header />
                </AppHeader>
                <AppBody>
                  <HoldingsHome />
                </AppBody>
                <FooterComp />
              </Wrapper>
            }
          ></Route>
          <Route
            path="/Report"
            element={
              <Wrapper>
                <AppHeader>
                  <Header />
                </AppHeader>
                <AppBody>
                  <Report />
                </AppBody>
                <FooterComp />
              </Wrapper>
            }
          ></Route>

          <Route
            path="/positions"
            element={
              <Wrapper>
                <AppHeader>
                  <Header />
                </AppHeader>
                <AppBody>
                  <PositionsHome />
                </AppBody>
                <FooterComp />
              </Wrapper>
            }
          ></Route>

          <Route
            path="/blogdetails/:id"
            element={
              <Wrapper>
                <AppHeader>
                  <Header />
                </AppHeader>
                <AppBody>
                  <BlogDetails />
                </AppBody>

              </Wrapper>
            }
          ></Route>

          <Route
            path="/writeblog"
            element={
              <Wrapper>
                <AppHeader>
                  <Header />
                </AppHeader>
                <AppBody>
                  <WriteBlog />
                </AppBody>

              </Wrapper>
            }
          ></Route>

          <Route
            path="/editblog/:id"
            element={
              <Wrapper>
                <AppHeader>
                  <Header />
                </AppHeader>
                <AppBody>
                  <EditBlog />
                </AppBody>

              </Wrapper>
            }
          ></Route>

          <Route
            path="/blog"
            element={
              <Wrapper>
                <AppHeader>
                  <Header />
                </AppHeader>
                <AppBody>
                  <Blog />
                </AppBody>

              </Wrapper>
            }
          />

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

          <Route
            path="/analytics"
            element={
              <Wrapper>
                <AppHeader>
                  <Header />
                </AppHeader>
                <AppBody>
                  <LineChart width={150} height={450} />
                </AppBody>
              </Wrapper>
            }
          ></Route>

          <Route
            path="/appointment"
            element={
              <Wrapper>
                <AppHeader>
                  <Header />
                </AppHeader>
                <AppBody>
                  <Reservation />
                </AppBody>
              </Wrapper>
            }
          ></Route>
          <Route
            path="/register"
            element={
              <Wrapper>
                <AppHeader>
                  <Header />
                </AppHeader>
                <AppBody>
                  <Register />
                </AppBody>
              </Wrapper>
            }
          ></Route>
          <Route
            path="/advisor/:id"
            element={
              <Wrapper>
                <AppHeader>
                  <Header />
                </AppHeader>
                <AppBody>
                  <Advisor />
                </AppBody>
              </Wrapper>
            }
          />
          <Route
            path="/advisors"
            element={
              <Wrapper>
                <AppHeader>
                  <Header />
                </AppHeader>
                <AppBody>
                  <Advisors />
                </AppBody>
              </Wrapper>
            }
          />
          <Route
            path="/appoinment/info"
            element={
              <Wrapper>
                <AppHeader>
                  <Header />
                </AppHeader>
                <AppBody>
                  <Information />
                </AppBody>
              </Wrapper>
            }
          />
          <Route
            path="/news"
            element={
              <Wrapper>
                <AppHeader>
                  <Header />
                </AppHeader>
                <AppBody>
                  <News />
                </AppBody>
              </Wrapper>
            }
          />
        </Route>
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
