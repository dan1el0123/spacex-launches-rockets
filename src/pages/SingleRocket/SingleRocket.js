import { useParams } from "react-router-dom";

import "./SingleRocket.css";
import RocketInfo from "../../components/RocketInfo/RocketInfo";

const SingleRocket = () => {
    const { rocketId } = useParams();
    return (
        <main className="singleRocket">
            <RocketInfo rocketId={rocketId} />
            <div className="singleRocket__sidebar">sidebar</div>
        </main>
    );
};

export default SingleRocket;
