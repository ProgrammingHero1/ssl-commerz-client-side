import React, { useEffect, useState } from 'react';
import VehicleCard from '../VehicleCard/VehicleCard';


const Vehicles = () => {
    const [vehicles, setVehicles] = useState([]);

    // Loading Data 
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => {
                
                setVehicles(data);
            })
    }, [])
    return (
        <section id="book-ride" className="mt-5 container">
            <p className="text-center fw-bolder">Vehicle Models</p>
            <h2 className="text-center fw-bolder">Our <span style={{ color: '#ff4d30' }}>Vehicles</span></h2>
            <p className="text-center">To contribute to positive change and achieve our <br/> sustainability goals with many extraordinary</p>

            {/* render vehicles from server side */}
            <div className="row">
                {
                    vehicles.map(vehicle => <VehicleCard vehicle={vehicle}></VehicleCard>)
                }
            </div>
        </section>
    );
};

export default Vehicles;