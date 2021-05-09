import * as React from 'react';
import {Suspense} from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import './App.css';
import Home from "./Components/home/home"
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                    <div className="main">
                        <Switch>
                            <Route path="/" exact component={Home}/>
                        </Switch>
                    </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
