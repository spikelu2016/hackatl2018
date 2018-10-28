import PropTypes from 'prop-types';
import React from 'react';
import Routes from './Routes.js';
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
    );
  }
}

AppContainer.propTypes = {
};

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
