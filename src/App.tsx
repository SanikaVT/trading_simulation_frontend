import React from "react";
import "./App.css";
import styled from "styled-components";
import Header from "./components/header/Header";
import Home from "./components/dashboard/Home";
import OrderStatus from "./components/orders/OrderStatus";
import SignIn from "./components/signup/SignIn";
import SignUp from "./components/signup/SignUp";
import WriteBlog from"./components/blog/WriteBlog"
import ForgotPassword from "./components/signup/ForgotPassword";
import RiskAppetite from "./components/signup/RiskAppetite";
import StockLeague from "./components/stockLeague/StockLeaguePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserDetail from "./components/user_profile/UserDetalsContainer";
import FooterComp from "./components/footer/FooterComp";
import ForumComp from "./components/forum/Forum";
import LineChart from "./components/stockAnalytics/analytics";
import Blog from "./components/blog/Blog"
import BlogDetails from "./components/blog/BlogDetails";
import EditBlog from "./components/blog/EditBlog";
import ForgotPasswordOtp from"./components/signup/ForgotPasswordOtp";
import HoldingsHome from "./components/holdingsandpositions/HoldingsHome";
import Report from "./components/holdingsandpositions/Report";
import ViewNews from "./components/newsmanagement/ViewNews";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <Wrapper>
              <AppHeader>
                <Header />
              </AppHeader>
              
                <Home />
             
                  <FooterComp/>
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
              <FooterComp/>
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
                <UserDetail/>
              </AppBody>
              <FooterComp/>
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
                <ForumComp/>
              </AppBody>
              <FooterComp/>
            </Wrapper>
          }
        />

          <Route path="/" element={<SignIn />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
          <Route path="/forgotpasswordotp" element={<ForgotPasswordOtp />}></Route>
          <Route path="/riskappetite" element={<RiskAppetite />}></Route>
          <Route path="/Holdings" element={<HoldingsHome />}></Route>
          <Route path="/Report" element={<Report />}></Route>
          <Route path="/News" element={<ViewNews />}></Route>
          <Route path="/blogdetails" element={<Wrapper>
            <AppHeader>
              <Header />
            </AppHeader>
            <AppBody>
              <BlogDetails/>
            </AppBody>
            <FooterComp/>
          </Wrapper>}></Route>

          <Route path="/writeblog" element={<Wrapper>
            <AppHeader>
              <Header />
            </AppHeader>
            <AppBody>
              <WriteBlog/>
            </AppBody>
            <FooterComp/>
          </Wrapper>}></Route>


        <Route path="/editblog" element={<Wrapper>
          <AppHeader>
            <Header />
          </AppHeader>
          <AppBody>
            <EditBlog/>
          </AppBody>
          <FooterComp/>
        </Wrapper>}></Route>

          <Route path="/blog" element={<Wrapper>
            <AppHeader>
              <Header />
            </AppHeader>
            <AppBody>
              <Blog/>
            </AppBody>
            <FooterComp/>
          </Wrapper>} />
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
              <LineChart  width={150} height={450}/>
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
