import React, { useEffect, useState } from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    
    // Loading Data 
    useEffect(() => {
        fetch('./testimonials.json')
            .then(res => res.json())
            .then(reviews => {
                setTestimonials(reviews);
            })
    }, [])

    return (
        <section className="my-5 bg-light" id="testimonials">
            <div className="container">
                <p className="text-center fw-bolder">Reviewed by People</p>
                <h1 className="text-center">Clients'<span style={{ color: '#ff4d30' }}>Testimonials</span></h1>
                <p className="text-center text-success ">Certain but she but shyness why cottage. <br/> Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. <br/> Weeks quiet do vexed.</p>
               
                
                
                <div className="row">
                    {
                        testimonials.map(testimonial => <TestimonialCard testimonial={testimonial}></TestimonialCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;