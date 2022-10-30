import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const Sidebar = () => {
    return (
        <Container className="Sidebar">
            <div className="h-full p-3 w-100 dark:bg-gray-900 text-white">
                <div className="flex items-center p-2 space-x-4">
                    <div>
                        <Link
                            className="admin_title text-40 text-white font-semibold mb-20"
                            to="/admin"
                        >
                            ADMIN
                        </Link>
                    </div>
                </div>
                <div className="divide-y divide-gray-300 sidebar_content">
                    <ul className="pt-2 pb-4 ">
                        <li className="mb-26">
                            <a
                                rel="noopener noreferrer"
                                href="#"
                                className="flex items-center  rounded-md"
                            >
                                <Link to="/admin/dashboard" className="font-bold tracking-widest uppercase text-gray-300 text-20">
                                    Dashboard
                                </Link>
                            </a>
                        </li>
                        <li className="mb-10">
                            <a
                                rel="noopener noreferrer"
                                href="#"
                                className="flex items-center  rounded-md "
                            >
                                <Link to="/admin/films" className="font-bold tracking-widest uppercase text-gray-300 text-20">
                                    Films
                                </Link>
                            </a>
                        </li>
                        <li className="mb-10 pl-24">
                            <a
                                rel="noopener noreferrer"
                                href="#"
                                className="flex items-center  rounded-md "
                            >

                                <Link to="/admin/films" className="font-medium tracking-widest  text-white text-16">
                                    Films
                                </Link>
                            </a>
                        </li>
                        <li className="mb-26 pl-24">
                            <a
                                rel="noopener noreferrer"
                                href="#"
                                className="flex items-center  rounded-md "
                            >

                                <Link to="/admin/films/addnew" className="font-medium tracking-widest  text-white text-16">
                                    Add New
                                </Link>
                            </a>
                        </li>
                        <li className="mb-20">
                            <a
                                rel="noopener noreferrer"
                                href="#"
                                className="flex items-center rounded-md"
                            >

                                <Link to="/admin/showtimes" className="font-bold tracking-widest uppercase text-gray-300 text-20">
                                    Showtimes
                                </Link>
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        </Container>
    );
};

export default Sidebar;

const Container = styled.div`
  &.Sidebar {
    .admin_title {
      font-size: 45px;
      font-weight: 700;
      background: -webkit-linear-gradient(90deg, #fad961 0%, #f76b1c 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .sidebar_content {
      a {
        &:hover {
          background: -webkit-linear-gradient(90deg, #fad961 0%, #f76b1c 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        &:focus{
            background: -webkit-linear-gradient(90deg, #fad961 0%, #f76b1c 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }
  }
`;

