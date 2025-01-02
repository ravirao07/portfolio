import React, { useRef } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';
import './Style/About.css';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const containerVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut' } },
    };

    const textVariant = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: 'easeInOut' } },
        hover: { scale: 1.05, transition: { duration: 0.3 } },
    };

    const imageVariant = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 1.5, ease: 'easeInOut' } },
        hover: { scale: 1.1, transition: { yoyo: Infinity, duration: 0.6 } },
    };

    return (
        <Container fluid className="about-container my-5" id='about'>
            <Row className="align-items-center">
                <Col xs={12} md={6} className="text-center" data-aos="zoom-out-left" data-aos-duration="1000">
                    <motion.div
                        className="about-image-container shadow-lg rounded"
                        variants={imageVariant}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        whileHover="hover"
                    >
                        <Image
                            src={`/assets/About/ravi_about.jpg`}
                            roundedCircle
                            fluid
                            className="about-image"
                        />
                    </motion.div>
                </Col>
                <Col xs={12} md={6} data-aos="fade-down-right" data-aos-duration="1000">
                    <motion.div
                        className="about-text shadow p-3 mb-5 rounded" 
                        ref={ref}
                        variants={containerVariant}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                    >
                        <motion.h2
                            className="display-4 font-weight-bold ms-5"
                            variants={textVariant}
                            whileHover="hover"
                        >
                            About Me
                        </motion.h2 >
                        <motion.h3 variants={textVariant} whileHover="hover" className='mb-4' >
                        Hi. I'm Ravi Rao , nice to meet you. Please take a look around.
                        </motion.h3>
                        <motion.p variants={textVariant} whileHover="hover">
                            I am a dedicated web developer focused on building high-quality, responsive websites. My expertise is in modern JavaScript frameworks, and I enjoy creating both functional and beautiful web applications.
                        </motion.p>
                        <motion.p variants={textVariant} whileHover="hover">
                            My goal is to continue growing in the field and mastering new technologies to make innovative, user-friendly experiences.
                        </motion.p>
                    </motion.div>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
