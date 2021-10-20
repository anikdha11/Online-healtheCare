
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const {serviceId} = useParams();

    return (
        <div className="mt-5 mb-5">
            <h1 >Service Details</h1>
            <h3 className="text-danger "> Service Details-{serviceId} is comming soon</h3>
            <h5>Wait for it....</h5>
        </div>
    );
};

export default ServiceDetails;