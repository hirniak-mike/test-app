import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import firebase from 'firebase';

import MainRouter from './Router/mainRouter';
import { rootStore } from './Stores/_rootStore';

import './Res/Styles/reset_style.scss';
import './Res/Styles/global.scss';

firebase.initializeApp({
  apiKey: "AIzaSyA3QxaJBcfWPXa0QNjYVBPWspxc4zRtFQw",
  authDomain: "products-list-cb946.firebaseapp.com",
  projectId: "products-list-cb946",
  storageBucket: "products-list-cb946.appspot.com",
  messagingSenderId: "1084590470862",
  appId: "1:1084590470862:web:ec86b215ec96f10eec829f"
});

ReactDOM.render(
  <React.StrictMode>
    <Provider {...rootStore}>
      <MainRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

