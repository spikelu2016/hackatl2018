import React from 'react';
import PropTypes from 'prop-types';

const Banner = ( {} ) => {
    return (
        <div className="banner">
          <div className="banner-wrapper">
            <div className="banner-groupper">
              <img
                className="banner-icon"
                src="https://res.cloudinary.com/dclmhv0zu/image/upload/v1540672097/1488587115.svg"/>
              <div className="banner-line">
              </div>
              <div className="banner-title">
                Asaga
              </div>
            </div>
            <div className="banner-menu">
              <div className="banner-menu-item">
                Home
              </div>
              <div className="banner-menu-item">
                Discover
              </div>
              <div className="banner-menu-item">
                Messages
              </div>
              <div className="banner-menu-item">
                My Profile
              </div>
            </div>
          </div>
        </div>
    );
};

Banner.propTypes = {
};


export default Banner;
