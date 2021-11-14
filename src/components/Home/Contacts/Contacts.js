import React from 'react';
import './Contacts.css'
import a from '../../../images/654.jpg'
import b from '../../../images/aboutImage.jpg'
// import c from '../../../images/architecture.jpg'
const Contacts = () => {
    const images =[a,b];
    let index = Math.floor(Math.random()* images.length)
    return (
        <img src={images[index]} className="img-fluid" alt="" />
        // <section className="contact my-5 py-5">
        //     <div className="container">
        //         <div className="section-header text-center text-white mb-5">
        //             <h5 className="text-warning">Contact</h5>
        //             <h1>Leave Your Message</h1>
        //         </div>
        //         <div className="col-md-9 mx-auto ">
        //             <form action="">
        //                 <div className="form-group mb-3">
        //                     <input type="text" className="form-control bg-dark text-white" placeholder="Email Address *" />
        //                 </div>
        //                 <div className="form-group mb-3">
        //                     <input type="text" className="form-control bg-dark text-white" placeholder="Subject *" />
        //                 </div>
        //                 <div className="form-group mb-3">
        //                     <textarea name="" className="form-control bg-dark text-white" id="" cols="30" rows="10" placeholder="Message *"></textarea>
        //                 </div>
        //                 <div className="form-group text-center">
        //                     <button type="button" className="btn btn-lg btn-primary"> Submit </button>
        //                 </div>
        //             </form>
        //         </div>
        //     </div>
        // </section>
    );
};

export default Contacts;