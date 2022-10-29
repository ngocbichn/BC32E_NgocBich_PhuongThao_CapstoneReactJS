import React from "react";
import { useSelector } from "react-redux";
import { redirect, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useMovieBooking } from "../../../store/filmManage/movieBookingSelector";

const BookingTicket = () => {

 

  const paramLichChieu = useParams()
  console.log(paramLichChieu.maLichChieu)
  // const state = useMovieBooking()
  const state = useMovieBooking()
  console.log(state)
  const navigate = useNavigate()
  console.log(navigate)
  return <div className="bookingPage">BookingTicket
  <div className="container">
    <div className="">
      <h1 className="text-white">ĐẶT VÉ</h1>
      
    </div>
    <div></div>
  </div>


  </div>;
};

export default BookingTicket;

const Container = styled.div`
&.bookingPage {
  .container {
    padding-top: 25px;
max-width: 1280px;
margin: auto
  }

}
`
