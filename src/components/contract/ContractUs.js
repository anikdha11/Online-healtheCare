import React from 'react';
import { Form } from 'react-bootstrap';

const ContractUs = () => {
    return (
        <div id="contractus" className="App w-75 mx-auto">
            <h1 className="fw-bold text-warning">Contract Us</h1>

            <br />
            <h2 className="text-info">We are here for you.</h2>
            <p>
                Reach out to your local Nano Home Care representative to receive a free in-home consultation today!
            </p>
            <h6>Please complete the contact information below and let us know your needs.</h6>
            <div>
                <Form className="mt-3">


                    <Form.Control placeholder="Name" require />

                    <br />

                    <Form.Control placeholder="Address" require />

                    <br />

                    <Form.Control placeholder="City" require />

                    <br />
                    <Form.Control placeholder="Email" require />

                    <br />
                    <input className="mb-4" type="submit" value="Submit" />


                </Form>
            </div>
        </div>
    );
};

export default ContractUs;