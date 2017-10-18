import React from 'react';

import { render } from 'react-dom';

import { BrowserRouter, Route } from 'react-router-dom';

import Tightbeam from '../../components/Tightbeam/index.jsx';

require('./app.scss');

render(
  (
    <BrowserRouter>
      <Route path="/" component={Tightbeam} />
    </BrowserRouter>
  ),
  document.getElementById('main'),
);
