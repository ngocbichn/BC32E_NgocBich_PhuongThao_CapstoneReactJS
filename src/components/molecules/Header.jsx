import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container className="Header">
      <header className="container body-font">
        <div className="main-content mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <a
            className="flex title-font font-medium items-center mb-4 md:mb-0"
            href="#"
          >
            <span className="title ml-3 text-5xl">MOVIE</span>
          </a>
          <nav className="nav_header md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-28">Home</a>
            <a className="mr-28">Showing Movie</a>
            <a className="mr-28">Coming Soon</a>
            <a className="mr-28">Booking</a>
          </nav>
          <button className="btn_login">LOGIN</button>
        </div>
      </header>

      {/* <button>SHOW MORE</button> */}
    </Container>
  );
};

export default Header;

const Container = styled.div`
  &.Header {
    .container {
      max-width: 1280px;
      padding: 0 35px;
      margin: auto;
      box-sizing: border-box;
      .main-content {
        padding: 30px 0;
      }
      .title {
        font-weight: 700;
      }
      .nav_header {
        a {
          cursor: pointer;
          font-size: 16px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.75);
          &:hover {
            background: -webkit-linear-gradient(
              90deg,
              #fad961 0%,
              #f76b1c 100%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
      }
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
  }
`;
