import { api, GROUPID } from "../constants/api"



export const filmManageServices = {
    getMovieList: () => {
        return api.get('QuanLyPhim/LayDanhSachPhim?maNhom=GP06')
    },

    getMovieDetail: (movieId) => {
        return api.get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`)
    },
    postMovie: (formData) => {
        return api.post(`QuanLyPhim/ThemPhimUploadHinh?maNhom=${GROUPID}`, formData)
    },
    getFilmInfo: (movieId) => {
        return api.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${movieId}`)
    }

}

