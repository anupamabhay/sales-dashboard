import React from 'react'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Graph from './components/Graph';
import Chart from './components/Chart';
import './global.css';

const App = () => {
    return (
        <div className='app-container'>
            <Navbar />
            <div className="content-container">
                <Header />
                <div className="content">
                    <Graph />
                    <Chart />
                </div>
            </div>
        </div>  
    )
}

export default App