import React from 'react';
import { Card } from 'react-bootstrap';

const About = () => {

    return (
        <div id="about" className="App">
            <Card className="bg-dark text-dark">
                <Card.Img src="https://static01.nyt.com/images/2020/10/19/well/well-hospital-chen/well-hospital-chen-mobileMasterAt3x.jpg" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title><h1 className="text-info fw-bolder border-bottom border-dark border-3 bg-transparent">About Us</h1></Card.Title>
                    <Card.Text className="fw-bold">
                       <h3> We Provide Most Proffesional Service
                        Since 2000..</h3>
                    </Card.Text>
                    <Card.Text>
                        <h5 className="border-bottom border-danger w-25 mx-auto border-4 pb-2">Why Choose Us?</h5>
                        <p>We are always carefull to our patient and service</p>
                        <p>Book and appoinment with any specialist anytime</p>
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>

        </div>
    );
};

export default About;