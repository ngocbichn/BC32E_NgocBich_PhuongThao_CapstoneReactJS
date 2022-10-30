import { api } from "../constants/api"


export const ticketBookingService =  {
    getTicketRoomDetail: (MaLichChieu) => {
        return api.get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${MaLichChieu}`)
    }

}