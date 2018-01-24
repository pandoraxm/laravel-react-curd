require('./bootstrap');
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';


import Master from './components/Master';
import CreatePost from './components/CreatePost';
import DisplayPost from './components/DisplayPost';
import UpdatePost from './components/UpdatePost';


render(
  <Router history={browserHistory}>
      <Route path="/" component={Master} >
        <Route path="/add-item" component={CreatePost} />
        <Route path="/display-item" component={DisplayPost} />
        <Route path="/edit/:id" component={UpdatePost} />
      </Route>
    </Router>,
        document.getElementById('crud-app'));
