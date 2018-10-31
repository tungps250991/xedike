import React, { Component } from 'react';

import Trip from './Trip';

class TripList extends Component {
    // getTrip = (trip) => {
    //     console.log(trip);
    // }

    render() {
        var { trips } = this.props;
        let elmTrip = trips.map((trip, index) => {
            return <Trip 
                trip={trip}
                key={index}
                // getTrip={this.getTrip}
                getTripApp={this.props.getTripApp}
            />
        })
        return (
            <div className="py-5">
                <h1>DANH SÁCH CÁC CHUYẾN ĐI</h1>
                <div className="container">
                    <div className="row">
                        {elmTrip}
                    </div>
                </div>
            </div>
        );
    }
}

export default TripList;