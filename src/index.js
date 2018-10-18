import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { MainStore } from './stores/MainStore';
import App from './components/App';

const mainStore = new MainStore();

const Main = () => (
    <Provider mainStore={mainStore} >
        <App />
    </Provider>
);

ReactDOM.render(
    <Main />,
    document.getElementById('app')
);
