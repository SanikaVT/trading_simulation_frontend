import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Header() {
  return (
    <Wrapper>
      <Logo>DTrade</Logo>
      <Search>
        <SearchContainer>
          <input
            placeholder="Search eg: infy bse, nifty fut weekly, gold mcx"
            type="text"
          />
        </SearchContainer>
      </Search>
      <MenuItems>
        <Link to="/">Dashboard</Link>
        <Link to="/orderstatus">Orders</Link>
        <a href="#">Holdings</a>
        <a href="#">Positions</a>
        <a href="#">Funds</a>
        <a href="#">KX4221</a>
        <Link to="/stockLeague">Stock League</Link>
      </MenuItems>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex; /*Gives vertical direction to the items inside wrapper */
  align-items: center; /*Align items center vertically*/
  justify-content: space-between; /*Gives spaces between all the items inside wrapper */
  background-color: white;
  height: 80px;
`;
const Logo = styled.h3`
  margin-left: 20px;
  margin-right: 20px;
`;
const Search = styled.div``;
const SearchContainer = styled.div`
  input {
    height: 30px;
    width: 320px;

    border: 1px solid;
    border-radius: 4px;
  }
  @media only screen and (max-width: 800px) {
    input {
      width: 160px;
    }
  }
`;
const MenuItems = styled.div`
  a {
    color: #4a49f4;
    text-decoration: none;
    line-height: 1.5em;
    padding: 2rem 1rem 28px;
    white-space: nowrap;
    border-bottom: 4px solid transparent;
    cursor: pointer;
    font-weight: 400;
    &:hover {
      color: #f25723;
    }
  }
`;

export default Header;
