import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import img from "../../../assets/images/Banner/movieBanner.jpg";
import { getMovieList } from "../../../store/filmManage/filmManageReducer";
import { useFilmManage } from "../../../store/filmManage/filmManageSelector";
import { useQueryUrl } from "../../hooks/useQueryUrl";
import cn from "classnames";

const HomeLayout = () => {
  const dispatch = useDispatch();
  const [searchParam, setSearchParam] = useSearchParams({
    isShowing: true,
    isHot: true,
  });
  const [query, setQueryUrl] = useQueryUrl({
    isShowing: true,
    isHot: true,
  });
  const v = useQueryUrl();

  const navigate = useNavigate()

  const { movieList, isFetching, error } = useFilmManage();
  console.log(isFetching);
  useEffect(() => {
    dispatch(getMovieList());
  }, []);

  return (
    <Container className="HomeLayout">
      <div className="carousel mb-80">
        <div className="overlay"></div>
      </div>
      <div className="container">
        <div className="mb-80">
          <div className="btn-movieList mb-30">
            <Button
              className={cn({
                active: searchParam.get("isShowing") === "true",
              })}
              onClick={() => {
                setQueryUrl({
                  isShowing: true,
                });
              }}
            >
              Now Showing
            </Button>
            <Button
              className={cn("ms-3", {
                active: searchParam.get("isShowing") === "false",
              })}
              onClick={() => {
                setQueryUrl({
                  isShowing: false,
                });
              }}
            >
              Coming Soon
            </Button>
          </div>
          <section className="mb-40">
            <div className="container mx-auto">
              <div className="flex flex-wrap -m-4">
                {movieList
                  .filter(
                    (item) => item.sapChieu.toString() === query.isShowing
                  )
                  .map((film) => (
                    <div
                      key={film.maPhim}
                      className="lg:w-1/4 md:w-1/2 p-7 w-full mb-16" 
                    >
                      <div className="relative h-96 rounded overflow-hidden">
                        <img style={{cursor: 'pointer'}}
                          alt={film.maPhim}
                          className="object-cover object-center w-full h-full block"
                          src={film.hinhAnh} onClick={() => {navigate(`/details/${film.maPhim}`)}}
                        />
                      </div>
                      <div className="mt-4">
                        <H3 style={{cursor: 'pointer'}} className=" filmName text-white text-20 font-semibold mb-1" onClick={() => {navigate(`/details/${film.maPhim}`)}}>
                          {film.tenPhim}
                        </H3>
                        <span className="mt-1 fa-solid fa-star rating_icon"></span>
                        <span className="ml-5 font-medium text-18 rating_point">
                          ({film.danhGia}/10)
                        </span>
                      </div>
                    </div>
                  ))}

              </div>
            </div>
          </section>
        </div>

        <div className="movie-schedule mb-80">
          {/* <div className="cinema-info mb-50">
            <div className="flex justify-center gap-16">
              <img
                alt=""
                className="w-50 h-50 rounded-full ring-2 ring-offset-4 mr-10 dark:bg-gray-500"
                src="https://www.bhdstar.vn/wp-content/themes/bhd/assets/images/logo.png"
              />
              <img
                alt=""
                className="w-50 h-50 rounded-full ring-2 ring-offset-4 mr-10 dark:bg-gray-500"
                src="https://www.bhdstar.vn/wp-content/themes/bhd/assets/images/logo.png"
              />
              <img
                alt=""
                className="w-50 h-50 rounded-full ring-2 ring-offset-4 mr-10 dark:bg-gray-500"
                src="https://www.bhdstar.vn/wp-content/themes/bhd/assets/images/logo.png"
              />
              <img
                alt=""
                className="w-50 h-50 rounded-full ring-2 ring-offset-4 mr-10 dark:bg-gray-500"
                src="https://www.bhdstar.vn/wp-content/themes/bhd/assets/images/logo.png"
              />
              <img
                alt=""
                className="w-50 h-50 rounded-full ring-2 ring-offset-4 mr-10 dark:bg-gray-500"
                src="https://www.bhdstar.vn/wp-content/themes/bhd/assets/images/logo.png"
              />
              <img
                alt=""
                className="w-50 h-50 rounded-full ring-2 ring-offset-4 mr-10 dark:bg-gray-500"
                src="https://www.bhdstar.vn/wp-content/themes/bhd/assets/images/logo.png"
              />
            </div>
          </div> */}
          <div className="cinema-menu">
            <section className="dark:bg-gray-800 dark:text-gray-100">
              <div className="container flex mx-auto lg:flex-row gap-40">
                <div className="w-full lg:w-1/3 border-r-2 pr-20">
                  <div className="flex justify-center space-x-3 mb-18">
                    <img
                      alt=""
                      className="w-50 h-50 rounded-full ring-2 ring-offset-4 mr-10 dark:bg-gray-500 mr-14"
                      src="https://www.bhdstar.vn/wp-content/themes/bhd/assets/images/logo.png"
                    />
                    <div>
                      <p className="font-semibold text-24">BHD Star</p>
                      <p className="text-sm leading-tight dark:text-gray-300">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </p>
                      <a
                        className="flex items-center py-2 space-x-1 text-sm dark:text-violet-400"
                        href="/"
                      >
                        <span>Read full story</span>
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-center space-x-3 mb-18">
                    <img
                      alt=""
                      className="w-50 h-50 rounded-full ring-2 ring-offset-4 mr-10 dark:bg-gray-500 mr-14"
                      src="https://www.bhdstar.vn/wp-content/themes/bhd/assets/images/logo.png"
                    />
                    <div>
                      <p className="font-semibold text-24">Lotte Cinema</p>
                      <p className="text-sm leading-tight dark:text-gray-300">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </p>
                      <a
                        className="flex items-center py-2 space-x-1 text-sm dark:text-violet-400"
                        href="/"
                      >
                        <span>Read full story</span>
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-center space-x-3 mb-18">
                    <img
                      alt=""
                      className="w-50 h-50 rounded-full ring-2 ring-offset-4 mr-10 dark:bg-gray-500 mr-14"
                      src="https://www.bhdstar.vn/wp-content/themes/bhd/assets/images/logo.png"
                    />
                    <div>
                      <p className="font-semibold text-24">BHD Star</p>
                      <p className="text-sm leading-tight dark:text-gray-300">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </p>
                      <a
                        className="flex items-center py-2 space-x-1 text-sm dark:text-violet-400"
                        href="/"
                      >
                        <span>Read full story</span>
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-center space-x-3 mb-18">
                    <img
                      alt=""
                      className="w-50 h-50 rounded-full ring-2 ring-offset-4 mr-10 dark:bg-gray-500 mr-14"
                      src="https://www.bhdstar.vn/wp-content/themes/bhd/assets/images/logo.png"
                    />
                    <div>
                      <p className="font-semibold text-24">BHD Star</p>
                      <p className="text-sm leading-tight dark:text-gray-300">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </p>
                      <a
                        className="flex items-center py-2 space-x-1 text-sm dark:text-violet-400"
                        href="/"
                      >
                        <span>Read full story</span>
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-center space-x-3 mb-18">
                    <img
                      alt=""
                      className="w-50 h-50 rounded-full ring-2 ring-offset-4 mr-10 dark:bg-gray-500 mr-14"
                      src="https://www.bhdstar.vn/wp-content/themes/bhd/assets/images/logo.png"
                    />
                    <div>
                      <p className="font-semibold text-24">BHD Star</p>
                      <p className="text-sm leading-tight dark:text-gray-300">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </p>
                      <a
                        className="flex items-center py-2 space-x-1 text-sm dark:text-violet-400"
                        href="/"
                      >
                        <span>Read full story</span>
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-center space-x-3 mb-18">
                    <img
                      alt=""
                      className="w-50 h-50 rounded-full ring-2 ring-offset-4 mr-10 dark:bg-gray-500 mr-14"
                      src="https://www.bhdstar.vn/wp-content/themes/bhd/assets/images/logo.png"
                    />
                    <div>
                      <p className="font-semibold text-24">BHD Star</p>
                      <p className="text-sm leading-tight dark:text-gray-300">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </p>
                      <a
                        className="flex items-center py-2 space-x-1 text-sm dark:text-violet-400"
                        href="/"
                      >
                        <span>Read full story</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12 gap-30">
                  <div className="schedule-detail flex gap-20">
                    <div className="movie-poster">
                      <img
                        alt=""
                        className="w-100 h-200 dark:bg-gray-500"
                        src="https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/t/t/ttp_700x1000_kc_14.10.2022_1_.jpg"
                      />
                    </div>
                    <div className="movie-desc">
                      <h2 className="text-3xl font-semibold">
                        All kinds of problems
                      </h2>
                      <div className="mt-10 mb-14">
                        <span className="text-sm mr-20">120 mins</span>
                        <span className="text-sm mr-20">English</span>
                        <span className="text-sm mr-20">14/10/2022</span>
                      </div>
                      <div className="">
                        <span className="text-orange-400 font-semibold text-24 mr-20">
                          13:10
                        </span>
                        <span className="text-orange-400 font-semibold text-24 mr-20">
                          15:30
                        </span>
                        <span className="text-orange-400 font-semibold text-24 mr-20">
                          18:10
                        </span>
                        <span className="text-orange-400 font-semibold text-24 mr-20">
                          20:15
                        </span>
                        <span className="text-orange-400 font-semibold text-24 mr-20">
                          22:30
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="schedule-detail flex gap-20">
                    <div className="movie-poster">
                      <img
                        alt=""
                        className="w-100 h-200 dark:bg-gray-500"
                        src="https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/t/t/ttp_700x1000_kc_14.10.2022_1_.jpg"
                      />
                    </div>
                    <div className="movie-desc">
                      <h2 className="text-3xl font-semibold">
                        All kinds of problems
                      </h2>
                      <div className="mt-10 mb-14">
                        <span className="text-sm mr-20">120 mins</span>
                        <span className="text-sm mr-20">English</span>
                        <span className="text-sm mr-20">14/10/2022</span>
                      </div>
                      <div className="">
                        <span className="text-orange-400 font-semibold text-24 mr-20">
                          13:10
                        </span>
                        <span className="text-orange-400 font-semibold text-24 mr-20">
                          15:30
                        </span>
                        <span className="text-orange-400 font-semibold text-24 mr-20">
                          18:10
                        </span>
                        <span className="text-orange-400 font-semibold text-24 mr-20">
                          20:15
                        </span>
                        <span className="text-orange-400 font-semibold text-24 mr-20">
                          22:30
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="schedule-detail flex gap-20">
                    <div className="movie-poster">
                      <img
                        alt=""
                        className="w-100 h-200 dark:bg-gray-500"
                        src="https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/t/t/ttp_700x1000_kc_14.10.2022_1_.jpg"
                      />
                    </div>
                    <div className="movie-desc">
                      <h2 className="text-3xl font-semibold">
                        All kinds of problems
                      </h2>
                      <div className="mt-10 mb-14">
                        <span className="text-sm mr-20">120 mins</span>
                        <span className="text-sm mr-20">English</span>
                        <span className="text-sm mr-20">14/10/2022</span>
                      </div>
                      <div className="">
                        <span className="text-orange-400 font-semibold text-24 mr-20">
                          13:10
                        </span>
                        <span className="text-orange-400 font-semibold text-24 mr-20">
                          15:30
                        </span>
                        <span className="text-orange-400 font-semibold text-24 mr-20">
                          18:10
                        </span>
                        <span className="text-orange-400 font-semibold text-24 mr-20">
                          20:15
                        </span>
                        <span className="text-orange-400 font-semibold text-24 mr-20">
                          22:30
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HomeLayout;

const Container = styled.div`
  &.HomeLayout {
    .carousel {
      /* width: 100%; */
      height: 750px;
      background-image: url(${img});
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: top;
      position: relative;
      /* top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1; */
      .overlay {
        background: rgba(39, 43, 54, 0.112);
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
    .container {
      max-width: 1280px;
      padding: 0 25px;
      margin: auto;
      box-sizing: border-box;
      .rating_icon {
        background: -webkit-linear-gradient(90deg, #fad961 0%, #f76b1c 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .rating_point {
        background: -webkit-linear-gradient(90deg, #fad961 0%, #f76b1c 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .movie-card {
        h3 {
          color: #f76b1c;
        }
      }
      .movie-schedule {
        border-color: rgba(255, 255, 255, 0.75);
      }
    }
  }
`;

const Button = styled.button`
  background-image: linear-gradient(90deg, #fad961 0%, #f76b1c 100%);
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  height: 50px;
  width: 150px;
  border-radius: 4px;
  box-shadow: 0 0 20px 0 rgb(255 88 96 / 50%);
  opacity: 0.45;
  margin-right: 20px;
  transition: 0.4s ease;
  &:hover {
    opacity: 0.85;
  }
  &.active {
    background-image: linear-gradient(90deg, #ffc800 0%, #ff5e00 100%);
    color: #fff;
    opacity: 1;
  }
`;

const H3 = styled.h3`
  &.filmName {
    &:hover {
      background: -webkit-linear-gradient(90deg, #fad961 0%, #f76b1c 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
  }
`
