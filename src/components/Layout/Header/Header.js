import React from 'react';
import Images from "../../../assets/Images/Images";
function Header(props) {
    return (
        <div className="container-fluid bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                         <div className="d-flex">
                             <a href="" className="nav-link">HOME</a>
                             <a href="" className="nav-link">ABOUT</a>
                             <a href="" className="nav-link">FAQS</a>
                             <a href="" className="nav-link">CONTACT</a>
                         </div>
                    </div>
                    <div className="col-lg-3">
                        <img src={Images.logo} alt=""/>
                    </div>
                    <div className="col-lg-5">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
