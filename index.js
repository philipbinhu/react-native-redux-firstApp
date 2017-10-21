
import { AppRegistry } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppReducer from './src/reducers';
import AppWithNavigationState from './src/navigators/AppNavigator';

class firstApp extends React.Component {
    store = createStore(AppReducer);

    render() {
        return (
            <Provider store={this.store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('firstApp', () => firstApp);

export default SimpleApp;


