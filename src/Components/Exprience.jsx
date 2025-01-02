import React from "react";
import exprience from './Data/exprience.json'
import './Style/Exprience.css'
const Experience = () => {
  return (
    <>
    <div className="container expe"id="exprience">
    <h1>EXPRIENCE</h1>
    <p className='my-4 description-exp'>I have worked in so many companies for many years very well and very honestly and I have very good experience</p>
    <p className="description-exp">about this company and work</p>
    {exprience.map((data)=>{
        return(
            <>
            <div key={data.id} className="exp-items text-center my-5" data-aos="zoom-in" data-aos-duration="1000">
                <div className="left">
                    <img src={`/assets/${data.imageSrc}`} alt="" />
                </div>
                <div className="right">
                    <h4>{data.role}</h4>
                    <h5><span style={{color:'yellowgreen'}}>{data.experience}{" "}</span>{" "} <span style={{color:'yellow'}}>{data.location}</span></h5>
                    <h6 style={{color:'yellow'}}>{data.position[0]}</h6>
                    <h6 style={{color:'yellow'}}>{data.position[1]}</h6>
                </div>
            </div>
            </>
        )
    })}
    </div>
    </>
  );
};

export default Experience;