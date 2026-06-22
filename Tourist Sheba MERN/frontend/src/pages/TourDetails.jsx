

import React, {useRef, useState, useEffect, useContext} from 'react'
import './../styles/tour-details.css'
import {Container, Row, Col, Form, ListGroup} from'reactstrap'
import {useParams} from 'react-router-dom'
import calculateAvgRating from '../utils/avgRating'
import avatar from '../assets/images/avatar.jpg'
import Booking from '../components/Booking/Booking'
import Newsletter from '../shared/Newsletter'
import useFetch from './../hooks/useFetch'
import {BASE_URL} from './../utils/config'
import {AuthContext} from '../context/AuthContext'

const TourDetails = () => {

    const {id} = useParams()
    const {user} = useContext(AuthContext)
    const reviewMsgRef = useRef('')
    const [tourRating, setTourRating] = useState(null)

    // fetch data from a database
    const {data:tour, loading, error} = useFetch(`${BASE_URL}/tours/${id}`)

    // destructure properties from the tour object
    const {
        photo,
        title,
        description,
        price,
        address,
        reviews,
        city,
        distance,
        maxGroupSize
    } = tour

    const {totalRating, avgRating} = calculateAvgRating(reviews);

    // format date
    const options = { day: 'numeric', month: 'long', year: 'numeric' };

    // submit request to the server
    const submitHandler = async e => {
        e.preventDefault()
        const reviewText = reviewMsgRef.current.value

        // Validation
        if (!tourRating) {
            alert('Please select a rating')
            return
        }

        if (!user) {
            alert('Please login to submit a review')
            return
        }

        if (!reviewText.trim()) {
            alert('Please write a review')
            return
        }

        try {
            const response = await fetch(`${BASE_URL}/review/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    username: user?.username || 'Anonymous',
                    reviewText: reviewText.trim(),
                    rating: tourRating
                })
            })

            const result = await response.json()
            if (result.success) {
                alert('Review submitted successfully!')
                reviewMsgRef.current.value = ''
                setTourRating(null)
                // Refresh the page or re-fetch the tour data
                window.location.reload()
            } else {
                alert(result.message || 'Failed to submit review')
            }
        } catch (err) {
            console.log(err)
            alert('Failed to submit review')
        }
    }

    useEffect(()=>{
        window.scrollTo(0,0)
    },[tour])

  return (
    <>
    <section>
        <Container>
            {
                loading && <h4 className='text-center pt-5'>Loading...............</h4>
            }
            {
                error && <h4 className='text-center pt-5'>{error}</h4>
            }
            {
                !loading && !error &&
                <Row>
                <Col lg='8'>
                    <div className="tour__content">
                        <img src={photo} alt="" />

                        <div className="tour__info">
                            <h2>{title}</h2>
                            <div className='d-flex align-items-center gap-5'>
                                <span className='tour__rating d-flex  align-items-center gap-1'>
                                <i class="ri-star-fill" style={{color :"var(--secondary-color)"}}></i>{avgRating === 0? null:avgRating}
                                {totalRating === 0? (
                                    "Not rated"
                                ) : (
                                <span>({reviews?.length}) </span>
                                )}
                                </span>

                                    <span>
                                        <i class="ri-map-pin-line" style={{color :"var(--secondary-color)"}}></i>
                                        {address}
                                    </span>
                            </div>
                            <div className="tour__extra-details">
                                <span><i class="ri-map-pin-2-line" style={{color :"var(--secondary-color)"}}></i>{city}</span>
                                <span><i class="ri-money-dollar-circle-line" style={{color :"var(--secondary-color)"}}></i>{price}/per person</span>
                                <span><i class="ri-map-pin-time-line" style={{color :"var(--secondary-color)"}}></i>{distance} k/m</span>
                                <span><i class="ri-group-line" style={{color :"var(--secondary-color)"}}></i>{maxGroupSize} people</span>
                            </div>
                            <h5>Description</h5>
                            <p>{description}</p>
                        </div>

                        {/*WWWWWWWWWWWWWWWWWWWWW TOUR REVIEW START WWWWWWWWWWWWWWWWWWWWWWWWW*/ }
                        <div className="tour__reviews" mt-4>
                            <h4>Reviews ({reviews?.length} reviews)</h4>

                            <Form onSubmit={submitHandler}>
                                <div className='d-flex align-items-center gap-3 mb-4 rating__group'>
                                    <span onClick={() => setTourRating(1)}>
                                        1 <i class="ri-star-fill"></i>
                                    </span>
                                    <span onClick={() => setTourRating(2)}>
                                        2 <i class="ri-star-fill"></i>
                                    </span>
                                    <span onClick={() => setTourRating(3)}>
                                        3 <i class="ri-star-fill"></i>
                                    </span>
                                    <span onClick={() => setTourRating(4)}>
                                        4 <i class="ri-star-fill"></i>
                                    </span>
                                    <span onClick={() => setTourRating(5)}>
                                        5 <i class="ri-star-fill"></i>
                                    </span>
                                </div>

                                <div className="review__input">
                                    <input type="text" 
                                    ref={reviewMsgRef} 
                                    placeholder='share your thoughts' 
                                    required
                                    />
                                    <button className="btn primary__btn text-white" type='submit'>
                                        Submit
                                    </button>
                                </div>
                            </Form>

                            <ListGroup className='user__reviews'>
                                {     
                                    reviews?.map(review => (
                                        <div className="review__item" key={review._id}>
                                            <img src={avatar} alt="" />

                                            <div className='w-100'>
                                                <div className='d-flex align-items-center justify-content-between'>
                                                    <div>
                                                        <h5>{review.username}</h5>
                                                        <p>{new Date(review.createdAt).toLocaleDateString("en-US", options)}</p>
                                                    </div>
                                                    <span className="d-flex align-items-center">
                                                    {review.rating} <i class="ri-star-fill" style={{color :"var(--secondary-color)"}}></i>
                                                    </span>
                                                </div>
                                                <h6>{review.reviewText}</h6>
                                            </div>
                                        </div>
                                    ))}
                            </ListGroup>
                        </div>
                        {/*WWWWWWWWWWWWWWWWWWWWW TOUR REVIEW END   WWWWWWWWWWWWWWWWWWWWWWWWW*/ }
                    </div>
                </Col>

                <Col lg='4'>
                    <Booking tour={tour} avgRating={avgRating}/>
                </Col>
            </Row>
            }
        </Container>
    </section>
    <Newsletter/>
    </>
  )
}

export default TourDetails
