import { api } from "../constants/api"



export const filmManageServices = {
    getMovieList: () => {
        return api.get('QuanLyPhim/LayDanhSachPhim?maNhom=GP06')
    },

    getMovieDetail: (movieId) => {
        return api.get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`)
    },
    // createMovieSchedule: (data= { 

    //         "maPhim": 0,
    //         "ngayChieuGioChieu": "string",
    //         "maRap": "string",
    //         "giaVe": 0

    // })=> {
    //     return api.post('QuanLyDatVe/TaoLichChieu',data)
    // }

}

