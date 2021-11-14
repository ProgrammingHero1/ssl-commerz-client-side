import React from 'react';
import { useHistory } from 'react-router';
import './VehicleCard.css'

const VehicleCard = (props) => {
    const { name, price, imageURL, description, _id } = props.vehicle;
    let history = useHistory();
    const bookVehicle = (id) => {
        
        history.push(`/bookVehicle/${id}`)
    }
    return (
        <div className="mb-5 col-lg-4 col-sm-6 ">
            <div className="card shadow-lg w-100 h-100 text-center rounded vehicleCard">
                <div className="d-flex justify-content-center align-items-center h-75 p-2">
                    <img src={imageURL} className="card-img-top h-75 w-75" alt="" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>{description}</p>
                </div>
                <div className="card-footer">
                    <div className="d-flex align-items-center justify-content-between ">
                        <h3 className="text-warning fw-bold">$ {price}</h3>
                        <button className="btn btn-success" onClick={() => bookVehicle(_id)}>Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VehicleCard;