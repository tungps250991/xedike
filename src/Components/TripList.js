import React, { Component } from 'react';

import Trip from './Trip';

class TripList extends Component {
    render() {
        var { trips } = this.props;
        let elmTrip = trips.map((trip, index) => {
            return <Trip 
                trip={trip}
                key={index} 
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