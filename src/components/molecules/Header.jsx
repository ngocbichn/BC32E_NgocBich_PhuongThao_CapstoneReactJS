import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container className="Header">
      <p>Header</p>
      <button>SHOW MORE</button>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  &.Header {
    button {
      background-image: linear-gradient(90deg, #fad961 0%, #f76b1c 100%);
      color: #fff;
      font-weight: 600;
      font-size: 14px;
      height: 50px;
      width: 150px;
      border-radius: 4px;
      box-shadow: 0 0 20px 0 rgb(255 88 96 / 50%);
      opacity: 0.85;
      transition: 0.4s ease;
      &:hover {
        opacity: 1;
      }
    }
  }
`;
