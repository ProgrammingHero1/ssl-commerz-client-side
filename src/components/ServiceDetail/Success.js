import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';

const Success = () => {
    let history = useHistory()
    const { id } = useParams();
    const [vehicles, setVehicles] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/orders/${id}`)
            .then(res => setVehicles(res.data))
    }, [id])
    const validatePayment = () => {
        const data = {
            tran_id: id,
            val_id: vehicles?.val_id
        }
        axios.post(`http://localhost:5000/validate`, data)
            .then(res => {
                if (res.data) {
                    alert("Order placed successfully")
                    history.push('/home')
                }
            })
    }

    return (
        <main>
            <h1>Payment Successful. Confirm your Order</h1>
            <div style={{ height: '600px' }} className="row d-flex align-items-center w-100">

                <div className="col-md-12 col-lg-4 offset-md-1 mb-4 fw-bolder text-dark">

                    <p>Plan your trip now</p>
                    <h1 style={{ color: '#ff4d30' }}>{vehicles?.product_name}</h1>
                    <p className="text-secondary">{vehicles?.product_profile}</p>
                    <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci perferendis fuga officia dicta, voluptatem provident!</p>
                    <button className="btn btn-lg btn-warning" onClick={validatePayment}>Confirm</button>

                </div>
                <div className="col-md-12 col-lg-6">
                    <img src={vehicles?.product_image} alt="" className="img-fluid w-100" />
                </div>
            </div>
        </main>
    );
};

export default Success;