import { api } from "../constants/api"

export const cinemaManageServices = {
    getCinemaInfo: () => {
        return api.get('QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP13')
    }
}
