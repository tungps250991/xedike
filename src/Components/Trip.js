import React, { Component } from 'react';
// import TripPopup from './TripPopup';

class Trip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowDetail: false
        }
    }

    toggleDetail() {
        // console.log("snnhdfjhsdfjdfbjh")
        this.setState({
            isShowDetail: !this.state.isShowDetail
        })
    }

    // sayHello = (name) => {
    //     console.log(name);
    // }

    handleClick = () => {
        this.props.getTripApp(this.props.trip);
    }

    render() {
        // console.log(this.state.isShowDetail)
        // console.log("Toi duoc re-render");
        let { trip } = this.props;
        let { isShowDetail } = this.state;
        return (
            <div className="col-md-4 my-3">
                <div className="card">
                    <img className="card-img-top" src={trip.carImage} alt="toyota" height="300px" />
                    <div className="card-body">
                        <h4 className="card-title">{`${trip.from} đến ${trip.to}`}</h4>
                        <p className="card-text">{trip.price} VND</p>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this.toggleDetail.bind(this)}
                        >
                            {isShowDetail ? "Ẩn" : "Hiện"}
                        </button>

                        {/* <button type="button" className="btn btn-success" onClick={this.sayHello.bind(this, "Tung")}>Test</button> */}
                        {/* <button type="button" className="btn btn-success ml-2" data-toggle="modal" data-target={`#modal_${trip.id}`}>Details</button> */}
                        {/* <button
                            type="button"
                            className="btn btn-success ml-2"
                            data-toggle="modal"
                            // onClick={this.props.getTrip.bind(this, this.props.trip)}
                            onClick={this.handleClick}
                        >
                            Details
                        </button> */}
                        <button type="button" className="btn btn-success ml-2" data-toggle="modal" data-target="#modelId" onClick={this.handleClick}>Details</button>

                        <div className={`detail my-3 ${this.state.isShowDetail ? "d-block" : "d-none"}`}>
                            <p>
                                <i className="fa fa-car"></i>
                                <span className="ml-2">{trip.car}</span>
                            </p>
                            <p>
                                <i className="fa fa-user-circle"></i>
                                <span className="ml-2">{trip.driver}</span>
                            </p>
                            <p>
                                <i className="fa fa-calendar"></i>
                                <span className="ml-2">{trip.time}</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/*Cach nay rat ton tai nguyen, moi Trip se co 1 Popup*/}
                {/* <TripPopup 
                    trip={trip}
                /> */}
            </div>
        );
    }
}

export default Trip;