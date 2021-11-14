import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const ServiceDetail = () => {
    const {id} = useParams();
    console.log(id);
    const { loggedInUser } = useAuth();
    const [vehicles, setVehicles] = useState([]);

    // Loading Data 
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ShahbajKhan/fakeDate/main/fakeData.json')
            .then(res => res.json())
            .then(data => {
                const matchedVehicle = data.find(vehicle => vehicle._id === id)
                setVehicles(matchedVehicle);
            })
    }, [id])
    const purchase =()=>{
        const info = {
            product_name: vehicles?.name,
            product_profile: vehicles?.description,
            product_image: vehicles?.imageURL,
            total_amount: vehicles?.price,
            cus_name: loggedInUser?.displayName,
            cus_email:loggedInUser?.email
            
        }
        fetch(`http://localhost:5000/init`,{
            method: 'POST',
            headers:{
                "content-type" :"application/json"
            },
            body: JSON.stringify(info)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            window.location.replace(data)
        })
        
    }

    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center w-100">
            <div className="col-md-12 col-lg-4 offset-md-1 mb-4 fw-bolder text-dark">
                
                <p>Plan your trip now</p>
                <h1 style={{color:'#ff4d30'}}>{vehicles?.name}</h1>
                <p className="text-secondary">{vehicles?.description}</p>
                <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci perferendis fuga officia dicta, voluptatem provident!</p>
                <button style={{backgroundImage: 'linear-gradient(to left,#f0561d,#fff,#ff6830,#f0561d)'}} className="btn btn-lg fw-bolder" onClick={purchase}>Book Ride</button>
            </div>
            <div className="col-md-12 col-lg-6">
                <img src={vehicles?.imageURL} alt="" className="img-fluid w-100"/>
            </div>
        </main>
    );
};

export default ServiceDetail;