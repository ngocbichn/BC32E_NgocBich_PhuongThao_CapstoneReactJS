import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, redirect, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { getTicketRoomDetail, useUserManage } from "../../../store/filmManage";
import { useMovieBooking } from "../../../store/filmManage/movieBookingSelector";

const BookingTicket = () => {



  console.log(localStorage.getItem('User_Login'))
const dispatch = useDispatch()


  const paramLichChieu = useParams()
  console.log(paramLichChieu.maLichChieu)
  const {ticketInfo} = useMovieBooking()
  const { userLogin } = useUserManage()
  console.log('ticketInfo', ticketInfo)


  useEffect(() => {
    dispatch(getTicketRoomDetail(paramLichChieu.maLichChieu))
  },[])

  const {thongTinPhim, danhSachGhe} = ticketInfo
  console.log(thongTinPhim)

  

  if (!localStorage.getItem('User_Login')) {
    return <Navigate to='/login' />
  }


  const renderGhe = () => {
    return danhSachGhe?.map((item, index) => {
      let classGheDaDat = item.daDat ? 'gheDaDat' : ''
      return (
        <> {item.loaiGhe === 'Vip'? <button disabled={item.daDat} className={`ghe gheVip m-2 ${classGheDaDat}`}  key={index}
        >{item.stt}</button>   :  <button  disabled={item.daDat} className={`ghe m-2 ${classGheDaDat}`} key={index}
        >{item.stt}</button>}
        </>
       
      )

    })
  }


  return <Container className="bookingPage">
    <div className="container">
      <div className="">
       
        <div className="grid grid-cols-12">
          <div className="col-span-8">
          <h1 className="text-orange-400 text-4xl text-center">ĐẶT VÉ</h1>
          <div className="flex flex-row items-center align-middle">
            <div className="screen "> 
            <h3 className="text-black my-auto text-center items-center mt-3 ">MÀN HÌNH</h3>  </div>
            </div>
            <div>
              {renderGhe()}
            </div>
          </div>

          <div className=" pl-[40px] col-span-4">
            
            <h3 className="text-center text-green-500 text-3xl">0đ</h3>
            <hr />
            <h3 className="text-xl text-orange-400">{thongTinPhim?.tenPhim}</h3>
            <p>Địa điểm: {thongTinPhim?.diaChi}</p>
            <p>Ngày: {thongTinPhim?.ngayChieu}. Suất chiếu: {thongTinPhim?.gioChieu}</p>
            <hr />
            <div className="flex flex-row ">
              <div className="w-4/5"> <span className="text-orange-400 text-lg text-left">Ghế</span></div>
              <div className="text-right text-red-500">
                0đ
              </div>

            </div>
            <div>
              <i>Email: </i> {userLogin.email}
            </div>
            <div>
              <i>Số điện thoại: </i> {userLogin.soDT}
            </div>
            <div className="row mt-3">
              <Button>Đặt vé</Button>
            </div>
            
          

          </div>
        </div>

      </div>
      <div></div>
    </div>


  </Container>;
};

export default BookingTicket;

const Container = styled.div`
&.bookingPage {
  .container {
    padding-top: 25px;
max-width: 1280px;
margin: auto;

.screen {
  border-bottom: 50px solid #ffffff;
  border-left: 35px solid transparent;
  border-right: 35px solid transparent;
  height: 0;
  width: 100%;
  filter: drop-shadow(0 0 40px #ffffff);
  justify-content: center;
}
.ghe { //normal status
  width: 35px;
  height: 35px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
  background-color: grey;
  color: #ffffff;
}
.gheDaDat {
  
  cursor: no-drop;
  background-color: red;
  
}

.gheDangDat {
  background-color: #0ccf40!important;
}
.gheVip {
  background-color: #f76b1c;
}

  }
 

}
`

const Button = styled.button`
  background-image: linear-gradient(90deg, #fad961 0%, #f76b1c 100%);
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  height: 50px;
  width: 130px;
  margin-right: 15px;
  border-radius: 4px;
  box-shadow: 0 0 20px 0 rgb(255 88 96 / 50%);
  opacity: 0.85;
  transition: 0.4s ease;
  &:hover {
    opacity: 1;
  }
  margin: auto;
`;


