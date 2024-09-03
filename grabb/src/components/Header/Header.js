import React, { useState } from 'react';
import styled from 'styled-components';
import { FaUserCircle, FaShoppingCart, FaAngleDown, FaBars } from 'react-icons/fa';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 5px 10px;
  margin-top: 10px;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: calc(100% - 20px);
  margin-left: 10px;
  margin-right: 10px;
  z-index: 10;
  border-radius: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    width: calc(100% - 120px);
    margin-left: 60px;
    margin-right: 60px;
  }
`;

const Logo = styled.h1`
  color: #d92e4d;
  font-size: 24px;
  margin: 0;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 28px;
    margin-right: 60px;
  }
`;

const LocationAndSearch = styled.div`
  display: none;
  align-items: center;
  flex: 1;
  margin: 0 20px;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: transparent;
  padding: 5px 10px;
  font-size: 14px;
  color: #000;
`;

const LocationText = styled.span`
  cursor: pointer;
  font-weight: bold;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 5px 10px;
  flex: 1;
  margin-left: 20px;
`;

const SearchInput = styled.input`
  border: none;
  background: none;
  outline: none;
  font-size: 16px;
  flex: 1;
  padding: 5px;
  color: black;
`;

const NavContainer = styled.div`
  display: none;
  align-items: center;
  gap: 20px;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  color: black;
`;

const MobileMenuIcon = styled(FaBars)`
  display: block;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: ${props => props.isOpen ? 'flex' : 'none'};
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  padding: 20px;
  border-radius: 0 0 30px 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  color: black;
  cursor: pointer;
`;

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLocationClick = () => {
    console.log("Location pop-up will open here!");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <HeaderContainer>
      <Logo>Grabb</Logo>
      <LocationAndSearch>
        <LocationContainer onClick={handleLocationClick}>
          <LocationText>Search Location</LocationText>
          <FaAngleDown />
        </LocationContainer>
        <SearchBar>
          <SearchInput type="text" placeholder="Search for items..." />
        </SearchBar>
      </LocationAndSearch>
      <NavContainer>
        <IconContainer>
          <FaUserCircle size={24} />
          <span>Login</span>
          <FaShoppingCart size={24} />
          <span>Cart</span>
        </IconContainer>
      </NavContainer>
      <MobileMenuIcon size={24} onClick={toggleMobileMenu} />
      <MobileMenu isOpen={isMobileMenuOpen}>
        <MobileMenuItem onClick={handleLocationClick}>
          <FaAngleDown />
          <span>Search Location</span>
        </MobileMenuItem>
        <MobileMenuItem>
          <SearchInput type="text" placeholder="Search for items..." />
        </MobileMenuItem>
        <MobileMenuItem>
          <FaUserCircle size={24} />
          <span>Login</span>
        </MobileMenuItem>
        <MobileMenuItem>
          <FaShoppingCart size={24} />
          <span>Cart</span>
        </MobileMenuItem>
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;