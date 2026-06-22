

import React from 'react';
import ServiceCard from './ServiceCard';
import {Col} from "reactstrap";

import weatherImg from './../assets/images/weather.png';
import guideImg from './../assets/images/guide.png';
import customizationImg from './../assets/images/customization.png';

const servicesData = [
    {
        imgUrl: weatherImg,
        title: 'Calculate Weather',
        description: 'Stay prepared for every journey with accurate, real-time weather information. Search the weather of any city, country, or location and plan your trip with confidence.',
    },
    {
        imgUrl: guideImg,
        title: 'Best Tour Guide',
        description: 'Discover the best places with smart, reliable tour guidance. Get personalized suggestions, routes, and travel tips tailored to your destination.',
    },
    {
        imgUrl: customizationImg,
        title: 'Customization',
        description: 'Customize your travel experience just the way you want. From choosing activities to exploring top restaurants and attractions, enjoy a trip that matches your style.',
    },
]

const ServiceList = () => {
  return (
    <>
    {
        servicesData.map((item, index) => (
            <Col lg="3" key={index}>
                <ServiceCard item={item}/>
            </Col>
        ))}
    </>
  );
};

export default ServiceList
