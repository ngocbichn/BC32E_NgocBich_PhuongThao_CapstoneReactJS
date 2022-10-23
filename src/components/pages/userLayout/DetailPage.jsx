import React from 'react'
import styled from 'styled-components'

const DetailPage = () => {
    return (
        <Container className='DetailPage'>
            <div className='container'>
                <div className='flex content-between'>
                    <img src="https://dummyimage.com/400x400" alt="" />
                    <div className='filmDetail my-auto ml-32'>
                        <div className="lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h1 className="text-[40px] title-font text-orange-400 tracking-widest">FILM NAME</h1>
                            <p className="filmDesc">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
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
                    <div className='scheduleDetail flex flex-wrap' >
                        <div className=' md:w-1/3 mt-[16px]'>
                            <p className='font-semibold'>Ngày giờ chiếu:  <span className='font-normal'>1/10/2022</span> </p>
                            <p className='font-semibold'>Tên rạp: <span className='font-normal'>A</span></p>
                            <p className='font-semibold'>Thời lượng:  <span className='font-normal'>90'</span> </p>
                            <p className='font-semibold'>Giá vé: <span className='font-normal'>75,000VNĐ</span> </p>
                        </div>
                        <div className=' md:w-1/3 mt-[16px]'>
                            <p className='font-semibold'>Ngày giờ chiếu:  <span className='font-normal'>1/10/2022</span> </p>
                            <p className='font-semibold'>Tên rạp: <span className='font-normal'>A</span></p>
                            <p className='font-semibold'>Thời lượng:  <span className='font-normal'>90'</span> </p>
                            <p className='font-semibold'>Giá vé: <span className='font-normal'>75,000VNĐ</span> </p>
                        </div>
                        <div className=' md:w-1/3 mt-[16px]'>
                            <p className='font-semibold'>Ngày giờ chiếu:  <span className='font-normal'>1/10/2022</span> </p>
                            <p className='font-semibold'>Tên rạp: <span className='font-normal'>A</span></p>
                            <p className='font-semibold'>Thời lượng:  <span className='font-normal'>90'</span> </p>
                            <p className='font-semibold'>Giá vé: <span className='font-normal'>75,000VNĐ</span> </p>
                        </div>
                        <div className=' md:w-1/3 mt-[16px]'>
                            <p className='font-semibold'>Ngày giờ chiếu:  <span className='font-normal'>1/10/2022</span> </p>
                            <p className='font-semibold'>Tên rạp: <span className='font-normal'>A</span></p>
                            <p className='font-semibold'>Thời lượng:  <span className='font-normal'>90'</span> </p>
                            <p className='font-semibold'>Giá vé: <span className='font-normal'>75,000VNĐ</span> </p>
                        </div>
                        
                        <div className=' md:w-1/3 mt-[16px]'>
                            <p className='font-semibold'>Ngày giờ chiếu:  <span className='font-normal'>1/10/2022</span> </p>
                            <p className='font-semibold'>Tên rạp: <span className='font-normal'>A</span></p>
                            <p className='font-semibold'>Thời lượng:  <span className='font-normal'>90'</span> </p>
                            <p className='font-semibold'>Giá vé: <span className='font-normal'>75,000VNĐ</span> </p>
                        </div>
                        
                        <div className=' md:w-1/3 mt-[16px]'>
                            <p className='font-semibold'>Ngày giờ chiếu:  <span className='font-normal'>1/10/2022</span> </p>
                            <p className='font-semibold'>Tên rạp: <span className='font-normal'>A</span></p>
                            <p className='font-semibold'>Thời lượng:  <span className='font-normal'>90'</span> </p>
                            <p className='font-semibold'>Giá vé: <span className='font-normal'>75,000VNĐ</span> </p>
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
    
}

    
`