import React, { useEffect } from 'react'
import styled from 'styled-components'
import Header from '../../molecules/Header'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { userLoginAction, useUserManage } from '../../../store/filmManage'
import { NavLink, useNavigate } from 'react-router-dom'

const LogInPage = () => {

  const navigate = useNavigate()

    const dispatch = useDispatch() 
    const formik = useFormik({
        initialValues: {
          taiKhoan: '',
          matKhau: ''
        },
        onSubmit: values => {
          console.log('values',values)
          dispatch(userLoginAction(values))
          .then(() => {
            navigate(-1)
          })

        },
      });

    const {userLogin,isLoggin} = useUserManage()
    console.log(userLogin)
    console.log(isLoggin)

    

  return (
    <Container className='LoginPage'>
    <div>
    <div className="main-content py-20 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <NavLink
            className="flex title-font font-medium items-center mb-4 md:mb-0"
            to="/home"
          >
            <span className="title ml-3 text-5xl text-orange-500" >MOVIE</span>
          </NavLink>
         
        </div>
    </div>


{/* component */}
{/* component */}
<div className='loginForm'>
<form onSubmit={(e) => {
    e.preventDefault()
    formik.handleSubmit(e)
}} className=" min-h-screen flex flex-col justify-center sm:py-12">
  <div className=" p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
    <h1 className="font-bold text-center text-3xl mb-5">WELCOME TO MOVIE </h1>  
    <div className=" bg-gray-100 shadow w-full rounded-lg divide-y divide-gray-200">
      <div className="px-5 py-7">
        <label className="font-semibold text-sm text-gray-600 pb-1 block">Tài khoản</label>
        <input name='taiKhoan' onChange={formik.handleChange} type="text" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full text-black" />
        <label className="font-semibold text-sm text-gray-600 pb-1 block">Mật Khẩu</label>
        <input type="password" name='matKhau' onChange={formik.handleChange} className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full text-black" />
        <button type="submit" className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
          <span className="inline-block mr-2">Đăng nhập</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
      <div className="p-5">
        <div className="grid grid-cols-3 gap-1">
          <button type="button" className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block">MailUp</button>
          <button type="button" className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block">Google</button>
          <button type="button" className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block">Github</button>
        </div>
      </div>
      <div className="py-3">
        <div className="">
          <div className="text-center sm:text-left whitespace-nowrap">
            <button type='button' className="transition duration-200 mx-5 px-5 py-3 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
             
              <span className="inline-block ml-1">Quên mật khẩu </span>
            </button>
          </div>
          <div className="text-center sm:text-right whitespace-nowrap">
            <p className="inline-block ml-1 transition duration-200 mx-5 px-5 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">Bạn chưa có tài khoản? Đăng ký </p>
          </div>
        </div>
      </div>
    </div>
    <div className="py-5">
      <div className="grid grid-cols-2 gap-1">
        <div className="text-center sm:text-left whitespace-nowrap">
          <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block align-text-top">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="inline-block ml-1">Back to your-app.com</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</form>
</div>


    </Container>
  )
}

export default LogInPage

const Container = styled.div`
    &.LoginPage {
        .main-content {
            background-color: #2b2b31;
        }
        .loginForm {
            background-color: white;
        }

        .title {
        font-weight: 700;
        background: -webkit-linear-gradient(
              90deg,
              #fad961 0%,
              #f76b1c 100%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
      }
    }
`