import React from 'react';
import { Link } from 'react-router-dom';
import { ImLibrary } from "react-icons/im";
import { FcLibrary } from "react-icons/fc";
import { IoHome } from "react-icons/io5";
import { GiBookmarklet } from "react-icons/gi";
import { FaUserPen } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa6";
import { GiBookshelf } from "react-icons/gi";
import { VscNewFolder } from "react-icons/vsc";

const Dashboard = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark fixed-center">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Link to={'/#'} className="navbar-brand fs-3"><ImLibrary/> <b>Library Management</b></Link>
    <div className="offcanvas offcanvas-start text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title fs-1" id="offcanvasDarkNavbarLabel" style={{color:'goldenrod'}}><FcLibrary/><b>Library</b></h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3m fs-3">
          <li className="nav-item">
           <Link to={'/'} className="nav-link active" aria-current="page"><IoHome/> <b>Home</b></Link>
          </li>
          <li className="nav-item">
          <Link to={'/book'} className="nav-link active" aria-current="page"><GiBookmarklet/> <b>Book</b></Link>
          </li>
          <li className="nav-item">
          <Link to={'/author'} className="nav-link active" aria-current="page"><FaUserGraduate/> <b>Author</b></Link>
          </li>
          <li className="nav-item dropdown fs-3">
            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             <VscNewFolder/>-<b>Publish</b>
            </Link>
            <ul className="dropdown-menu dropdown-menu-dark fs-4">
              <li><Link className="dropdown-item" to={'/createbook'}><GiBookshelf/><b> Add Book</b></Link></li>
              <li><Link className="dropdown-item" to={'/createauthor'}><FaUserPen/><b> Add Author</b></Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Dashboard;