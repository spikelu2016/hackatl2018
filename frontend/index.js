import React from 'react';
import { render } from 'react-dom';
import { configureStore, history } from './store/configureStore';
import Root from './containers/Root';

import './assets/stylesheets/base.scss';
import './assets/stylesheets/login.scss';
import './assets/stylesheets/banner.scss';
import './assets/stylesheets/signup.scss';
import './assets/stylesheets/temple.scss';

const store = configureStore();

render(
    <Root store={store} history={history} />,
    document.getElementById('root')
);
