import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';


class App extends Component {
    componentWillMount() {
      const config = {
        apiKey: 'AIzaSyDs8dOd0wEAtae3pa-xRSvd_-BMr7kjgJM',
        authDomain: 'manager-439eb.firebaseapp.com',
        databaseURL: 'https://manager-439eb.firebaseio.com',
        projectId: 'manager-439eb',
        storageBucket: 'manager-439eb.appspot.com',
        messagingSenderId: '1055333358912'
      };
      firebase.initializeApp(config);
    }


  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
