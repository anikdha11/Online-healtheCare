import React from 'react';
import { Carousel } from 'react-bootstrap';

const TopBanner = () => {
    return (
        <div>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.froedtert.com/sites/default/files/styles/one_column/public/image/2018-09/be-an-engaged-health-care-consumer.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <p>“Everyone should have health insurance? I say everyone should have health care. I'm not selling insurance.”
                            ― Dennis Kucinich</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://lh3.googleusercontent.com/proxy/iV8_-ToKB1lRezfVSCDF7blKba9t4HH7KNPiMkQWxSuJaJQicKoE5vp_xFMGv0Cgh48E1OM0m5q0013wHa-sku1YC4BrHf-0u9nqyZyzrsNrsf9vmQ"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <p>“The art of medicine consists of amusing the patient while nature cures the disease.”</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www1.racgp.org.au/getattachment/6062155f-4fe4-4a1c-bdbb-63f08ab4a16b/How-would-a-shift-to-US-style-managed-care-impact.aspx"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <p>“The health care bill is nothing about health care- it's about controlling the people.”
                            ― David Lincoln</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default TopBanner;
