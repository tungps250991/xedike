import React, { Component } from 'react';
import './App.css';

// import Components
import Carousel from './Components/Carousel';
import TripList from './Components/TripList';

// import data
import trips from './Data/data';

class App extends Component {
    render() {
        console.log(trips);
        return (
            <div className="App">
                <Carousel />

                <TripList trips={trips} />
            </div>
        );
    }
}

export default App;
