import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import configureStore from './store';

import UsersComponent from './containers/UserContainer';

const store = configureStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <UsersComponent />
                </div>
            </Provider>
        );
    }
}

export default App;
