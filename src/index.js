import React from 'react';
import ReactDOM from 'react-dom';
//import { createRoot } from 'react-dom/client';

import Header from './components/header';


const App = () => {
    return (
        <>
            <Header/>
        </>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))