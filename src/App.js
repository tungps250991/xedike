import React, { Component } from 'react';
import './App.css';

// import Components
import Carousel from './Components/Carousel';
import TripList from './Components/TripList';
import TripPopup from './Components/TripPopup';

// import data
import trips from './Data/data';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trip: {}
        }
    }

    getTripApp = (trip) => {
        console.log(trip);
        this.setState({
            trip // trip: trip (destructuring)
        });
    }

    render() {
        return (
            <div className="App">
                <Carousel />

                <TripList trips={trips} getTripApp={this.getTripApp} />

                <TripPopup trip={this.state.trip}/>
            </div>
        );
    }
}

export default App;
