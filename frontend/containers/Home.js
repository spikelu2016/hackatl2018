import PropTypes from 'prop-types';
import React from 'react';
import Banner from '../components/Banner.js';
import AllTempleInfo from '../components/AllTempleInfo.js';
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <Banner />
          <AllTempleInfo history={this.props.history}/>
        </div>
    );
  }
}

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
)(Home);
