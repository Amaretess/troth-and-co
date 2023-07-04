import React from 'react';
import image from '../images/banner1_new.png'

const Jumbotron = () => {
    return (
        <div className="jumbotron">
            <div className="row">
                <div className="col">
                    <h1 className="lead">Welcome to Troth &amp; Co</h1>
                    <p className="display-4">HEALTHIER TOGETHER</p>
                    <h3 className="text-left-sm " >Are you ready to give your healthcare plan a check up?</h3>
                </div>
                <div className="col">
                    <img className="img-fluid" src={image}/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    
                </div>
            </div>
            
            
            
            
        </div>
    );
};

export default Jumbotron;
