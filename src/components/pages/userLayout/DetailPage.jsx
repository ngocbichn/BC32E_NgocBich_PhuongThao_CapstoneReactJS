import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { getMovieDetail } from '../../../store/filmManage/filmManageReducer'
import { useFilmManage } from '../../../store/filmManage/filmManageSelector'
import { Radio, Space, Tabs } from 'antd';


const DetailPage = () => {
    const [tabPosition, setTabPosition] = useState('left');
    const changeTabPosition = (e) => {
        setTabPosition(e.target.value);
    };

    const param = useParams()
    console.log(param.movieId)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMovieDetail(param.movieId))
    }, [])
    const { movieDetail, isFetchingMD } = useFilmManage()
    // console.log('moviedetail', movieDetail, 'isFetchingMD', isFetchingMD)
    return (
        <Container className='DetailPage'>
            <div className='container'>
                <div className='flex content-between'>
                    <img style={{ width: '400px', height: '600px' }} src={movieDetail?.hinhAnh} alt="" />
                    <div className='filmDetail my-auto ml-32'>
                        <div className="lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h1 className="text-[40px] title-font text-orange-400 tracking-widest">{movieDetail?.tenPhim}</h1>
                            <div>
                                <div className='flex'>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        className="w-[12px] h-[12px] text-orange-400" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-[12px] h-[12px]  text-orange-400 " viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-[12px] h-[12px]  text-orange-400 " viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-[12px] h-[12px]  text-orange-400 " viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-[12px] h-[12px]  text-orange-400 " viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                </div>

                            </div>
                            <p className="filmDesc">{movieDetail?.moTa}</p>
                            <div className=" film flex mt-6 items-center pb-5 border-t-2 border-gray-100 mb-5">
                                <div className="flex mt-24">
                                    <button className="mr-24">Trailer</button>
                                    <button className="btnBooking" >Đặt vé</button>

                                </div>

                            </div>
                        </div>



                    </div>

                </div>

                <div className='filmSchedule lg:pl-10'>
                    <h2 className=' mt-[40px] font-bold text-[40px] text-orange-400 text-center'>LỊCH CHIẾU</h2>
                    <div>
                        <Tabs style={{ color: '#fffff' }}
                            tabPosition={tabPosition}
                            items={new Array(3).fill(null).map((_, i) => {
                                const id = String(i + 1);
                                return {
                                    label: `ABC ${id}`,
                                    key: id,
                                    children: `Content of Tab ${id}`,
                                };
                            })}
                        />


                    </div>
                    <div className='grid grid-cols-12'></div>
                    <div className='scheduleDetail flex flex-wrap' >
                        <div className='flex flex-wrap w-1/2'>
                            <div className=' items-center flex w-full'>
                                <div className='w-1/4'>
                                    <img className='w-full' src="https://dummyimage.com/25x25/" alt="" />
                                </div>

                                <div className='  w-3/4 pl-[16px]'>

                                    <p className='font-semibold'>Ngày giờ chiếu:  <span className='font-normal'>1/10/2022</span> </p>
                                    <p className='font-semibold'>Tên rạp: <span className='font-normal'>A</span></p>
                                    <p className='font-semibold'>Thời lượng:  <span className='font-normal'>90'</span> </p>
                                    <p className='font-semibold'>Giá vé: <span className='font-normal'>75,000VNĐ</span> </p>

                                </div>
                            </div>
                            <div className='w-full'>
                                <p className='font-semibold'>Ngày giờ chiếu:  <span className='font-normal'>1/10/2022</span> </p>
                                <p className='font-semibold'>Tên rạp: <span className='font-normal'>A</span></p>
                                <p className='font-semibold'>Thời lượng:  <span className='font-normal'>90'</span> </p>
                                <p className='font-semibold'>Giá vé: <span className='font-normal'>75,000VNĐ</span> </p>
                            </div>

                        </div>
                        <div className='flex flex-wrap w-1/2'>
                            <div className=' items-center flex w-full'>
                                <div className='w-1/4'>
                                    <img className='w-full' src="https://dummyimage.com/25x25/" alt="" />
                                </div>

                                <div className='  w-3/4 pl-[16px]'>

                                    <p className='font-semibold'>Ngày giờ chiếu:  <span className='font-normal'>1/10/2022</span> </p>
                                    <p className='font-semibold'>Tên rạp: <span className='font-normal'>A</span></p>
                                    <p className='font-semibold'>Thời lượng:  <span className='font-normal'>90'</span> </p>
                                    <p className='font-semibold'>Giá vé: <span className='font-normal'>75,000VNĐ</span> </p>

                                </div>
                            </div>
                            <div className='w-full'>
                                <p className='font-semibold'>Ngày giờ chiếu:  <span className='font-normal'>1/10/2022</span> </p>
                                <p className='font-semibold'>Tên rạp: <span className='font-normal'>A</span></p>
                                <p className='font-semibold'>Thời lượng:  <span className='font-normal'>90'</span> </p>
                                <p className='font-semibold'>Giá vé: <span className='font-normal'>75,000VNĐ</span> </p>
                            </div>

                        </div>

                    </div>




                </div>


            </div>



        </Container>
    )
}

export default DetailPage

const Container = styled.div`
&.DetailPage {
    .container {
    padding-top: 25px;
max-width: 1280px;
margin: auto
    }
    button {
      background-image: linear-gradient(90deg, #fad961 0%, #f76b1c 100%);
      color: #fff;
      font-weight: 600;
      font-size: 14px;
      height: 50px;
      width: 150px;
      border-radius: 4px;
      box-shadow: 0 0 20px 0 rgb(255 88 96 / 50%);
      opacity: 0.85;
      transition: 0.4s ease;
      &:hover {
        opacity: 1;
      }
    }
    .ant-tabs {
        color: #ffffff;
        margin-bottom: 24px
    }
   
    
}

    
`