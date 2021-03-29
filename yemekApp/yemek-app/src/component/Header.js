import React from "react";
import styled from "styled-components";


function Header() {
  return (
    <Wrapper>
      <HeaderContainer>
        <AppName>
          <img
            src="https://cdn0.iconfinder.com/data/icons/kameleon-free-pack-rounded/110/Food-Dome-512.png"
            alt="siteapp"
          />
          YemekApp
        </AppName>
        <SearchBar>
          <input type="text" placeholder="Yemek ve Restotan Ara" />
        </SearchBar>
        <ButtonHeader>
          <SingInButton>
            <button>Giriş Yap</button>
          </SingInButton>
          <OrderCart>
            <button>Sepete</button>
          </OrderCart>
        </ButtonHeader>
      </HeaderContainer>
    </Wrapper>
  );
}

const ButtonHeader = styled.div`
  display: flex;
  flex-direction: row;
`;

const Wrapper = styled.div``;

const OrderCart = styled.div`
  .link {
    color: #00af91;
    :hover {
      text-decoration: none;
      color: white;
    }
  }
  button {
    background: transparent;
    border: none;

    color: #00af91;
    margin-right: 10px;
    background-color: white;
    margin: 1.1em 1.1em;
    padding: 0.25em 1em;
    :hover {
      cursor: pointer;
      color: white;
      background-color: #00af91;
    }
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-bottom: 8.5px solid lightgray;
  background-color: #a4ebf3;
`;

const SingInButton = styled.div`
  button {
    background: white;
    border: none;

    color: palevioletred;
    margin-right: 10px;

    margin: 1.1em 1.1em;
    padding: 0.25em 1em;
    :hover {
      cursor: pointer;
      color: white;
      background-color: palevioletred;
    }
  }

  .link {
    color: #00af91;
    :hover {
      text-decoration: none;
      color: #00af91;
    }
  }
`;

const AppName = styled.div`
  font-size: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }

  :hover {
    cursor: pointer;
  }

  .linkHeader {
    color: black;
    :hover {
      text-decoration: none;
      color: black;
    }
  }
`;

const SearchBar = styled.div`
  input {
    height: 30px;
    width: 300px;
    font-style: center;
    font-size: 20px;
    outline: none;
    border: none;
    padding: 10px;
    background-color: white;
    color: black;
    border-radius: 15px;
  }
`;

export default Header;
