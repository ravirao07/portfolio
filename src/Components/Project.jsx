import React from 'react'
import project from './Data/projets.json'
import Carousel from 'react-bootstrap/Carousel';
import './Style/Projects.css'

const Project = () => {
  return (
    <div>
      <div className="container projects my-5" id="projects">
        <h1>PROJECTS</h1>
        <p className='my-4 description-projects'>I like my work very much,I have made some project, you can see my projects hosted online. Each project is briefly described with links to code repositories and live demos in it</p>
        <div className="row d-flex justify-content-center align-content-center">
          {project.map((data) => (
            <>
              <div
                key={data.id}
                className="my-4 col-sm-6 col-md-4 col-lg-3 mx-4"
              >
                <div
                  className="card bg-dark text-light"
                  style={{
                    width: "18rem",
                    border: "1px solid yellow",
                    boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
                  }}
                  data-aos="flip-right"
                  data-aos-duration="1000"
                >
                  <Carousel >
                  <Carousel.Item >
                  <div className="img d-flex justify-content-center align-content-center p-3">
                    <img
                      src={data.imageSrc[0]}
                      className="card-img-top"
                      alt="..."
                      style={{
                        width: "250px",
                        height: "200px",
                        border: "2px solid yellow",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                  </Carousel.Item>
                  <Carousel.Item>
                  <div className="img d-flex justify-content-center align-content-center p-3">
                    <img
                      src={data.imageSrc[1]}
                      className="card-img-top"
                      alt="..."
                      style={{
                        width: "250px",
                        height: "200px",
                        border: "2px solid yellow",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                  </Carousel.Item>
                  <Carousel.Item >
                  <div className="img d-flex justify-content-center align-content-center p-3">
                    <img
                      src={data.imageSrc[2]}
                      className="card-img-top"
                      alt="..."
                      style={{
                        width: "250px",
                        height: "200px",
                        border: "2px solid yellow",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                  </Carousel.Item>
                  </Carousel>
                  <div className="card-body text-center">
                    <h5 className="card-title mb-2">{data.title}</h5>
                    <p className="card-text ms-2 mb-4" style={{}}>{data.description}</p>
                    <a href={data.demo} className="btn btn-primary mx-3">
                      Live
                    </a>
                    <a href={data.source} className="btn btn-warning">
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project