import React from 'react';
import BeerFilterForm from './BeerFilterForm';
import BeerViewer from './BeerViewer';

const App = () => (
    <React.Fragment>
        <BeerViewer />
        <BeerFilterForm />
    </React.Fragment>
);

export default App;
