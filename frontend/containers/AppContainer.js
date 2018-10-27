import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import LoginContainer from '../components/LoginContainer';
import SignupContainer from '../components/SignupContainer';

const AppContainer = ({}) => {
    return (
        <div>
            <SignupContainer />
        </div>
    );
};

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
