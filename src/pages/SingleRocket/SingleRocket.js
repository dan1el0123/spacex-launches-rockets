import { useParams } from "react-router-dom";

import "./SingleRocket.css";
import RocketInfo from "../../components/RocketInfo/RocketInfo";
import Sidebar from "../../components/Sidebar/Sidebar";

const SingleRocket = () => {
    const { rocketId } = useParams();
    return (
        <main className="singleRocket">
            <RocketInfo rocketId={rocketId} />
            <Sidebar rocketId={rocketId} />
        </main>
    );
};

export default SingleRocket;
