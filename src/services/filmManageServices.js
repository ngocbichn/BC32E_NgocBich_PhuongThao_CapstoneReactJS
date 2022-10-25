import { api } from "../constants/api"

export const filmManageServices = {
    getMovieList: () => {
        return api.get('QuanLyPhim/LayDanhSachPhim?maNhom=GP13')
    }
}