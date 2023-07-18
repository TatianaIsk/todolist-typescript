import React from 'react';
import './App.css'
import {
    BrowserRouter as Router,
    Route, Routes
} from "react-router-dom";

import Login from './pages/Login/Login';
import Register from "./pages/Register/Register";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;