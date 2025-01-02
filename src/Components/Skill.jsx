import React from 'react'
import skills from './Data/skill.json'
import './Style/Skills.css'
import 'aos/dist/aos.css';

const Skills = () => {
  return (
    <div>
      <div className="container skills my-5"id='skill'>
        <h1>Skills</h1>
        <p className='my-4 description-skil'>I Know So Many Skill and languages</p>
        <div className="items">
          {
            skills.map((data,index)=>(
              <>
              <div className="item" key={index} data-aos="flip-left" data-aos-duration="1000">
                <img src={`/assets/${data.imageSrc}`} alt="" />
                <h5>{data.title}</h5>
              </div>
              </>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Skills   

