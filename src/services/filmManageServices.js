import { api } from "../constants/api"

export const filmManageServices = {
    getMovieList: () => {
        return api.get('QuanLyPhim/LayDanhSachPhim?maNhom=GP13')
    },

    getMovieDetail: (movieId) => {
        return api.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${movieId}`)
    },
    getMovieSchedulebyId: (movieId) => {
        return api.get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`)
    }
}

