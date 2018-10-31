import React from 'react';

const TripPopup = (props) => {
    let { trip } = props;
    return (
        <div className="modal fade" id="modelId" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title" id="modelTitleId">Modal title</h4>
                    </div>
                    <div className="modal-body">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>From</td>
                                    <td>{trip.from}</td>
                                </tr>
                                <tr>
                                    <td>To</td>
                                    <td>{trip.to}</td>
                                </tr>
                                <tr>
                                    <td>Driver</td>
                                    <td>{trip.driver}</td>
                                </tr>
                                <tr>
                                    <td>Price</td>
                                    <td>{trip.price}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TripPopup;