import { api } from "../constants/api"


export const userManageService = {
    getUserInfo: (loginInfo) => {
        return api.post('QuanLyNguoiDung/DangNhap',loginInfo)
    }
}