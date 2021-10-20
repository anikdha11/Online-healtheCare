
import { Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const history = useHistory()
    const goHome = () => {
        history.push(`/home`)
    }
    return (
        <div className="mt-5 mb-5">
            <h1 >Service Details</h1>
            <h3 className="text-danger "> Service Details-{serviceId} is comming soon</h3>
            <h5>Wait for it....</h5>
            <Button onClick={goHome} className="mt-2" variant="outline-dark"> Go Home</Button>

        </div>
    );
};

export default ServiceDetails;