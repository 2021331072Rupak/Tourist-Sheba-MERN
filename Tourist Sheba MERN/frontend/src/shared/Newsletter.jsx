

import React from 'react'
import './newsletter.css'
import {Container, Row, Col} from 'reactstrap'
import maleTourist from './../assets/images/male-tourist.png'


const Newsletter = () => {
  return (
    <section className='newsletter'>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="newsletter__content">
                        <h2>Subscribe to get useful traveiling information</h2>

                        <div className="newsletter__input">
                            <input type="email" placeholder="Enter your email" />
                            <button className='btn newsletter__btn'>Subscribe</button>
                        </div>

                        <p>
                            Travel opens your mind, inspires your soul, and connects you with new cultures, people, and experiences. If you love exploring the world or dream of planning your next adventure, you’re in the right place. By subscribing, you’ll get access to helpful travel tips, destination guides, budget-friendly hacks, and real experiences that make your journeys smoother and more enjoyable.
                        </p>
                    </div>
                </Col>
                <Col lg='6'>
                    <div className="newsletter__img">
                        <img src={maleTourist} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
} 

export default Newsletter
