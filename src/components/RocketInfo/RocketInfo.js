import { useQuery, gql } from "@apollo/client";
import Loading from "../Loader/Loading";

import "./RocketInfo.css";

const GET_ROCKET = gql`
    query GET_ROCKET($rocketId: ID!) {
        rocket(id: $rocketId) {
            id
            height {
                meters
                feet
            }
            diameter {
                meters
                feet
            }
            cost_per_launch
            engines {
                type
                propellant_1
                propellant_2
                layout
            }
            name
            active
            description
            mass {
                kg
                lb
            }
            first_flight
        }
    }
`;

const RocketInfo = ({ rocketId }) => {
    const { loading, error, data } = useQuery(GET_ROCKET, {
        variables: { rocketId: rocketId },
    });

    if (loading) return <Loading />;
    if (error) return <p>Error :{error.message}</p>;

    return (
        <div className="singleRocket__info">
            <div className="singleRocket__overview">
                <h2 className="singleRocket__name">{data.rocket.name}</h2>
                <div className="singleRocket__status">
                    STATUS: {data.rocket.active ? "ACTIVE" : "RETIRED"}
                </div>
                <div className="singleRocket__desc">
                    {data.rocket.description}
                </div>
            </div>
            <div className="singleRocket__details">
                <div className="singleRocket__stat">
                    <p>HEIGHT</p>
                    <p>
                        {data.rocket.height.meters} m /{" "}
                        {data.rocket.height.feet} ft
                    </p>
                </div>
                <div className="singleRocket__stat">
                    <p>DIAMETER</p>
                    <p>
                        {data.rocket.diameter.meters} m /{" "}
                        {data.rocket.diameter.feet} ft
                    </p>
                </div>
                <div className="singleRocket__stat">
                    <p>MASS</p>
                    <p>
                        {data.rocket.mass.kg} kg / {data.rocket.mass.lb} lb
                    </p>
                </div>
                <div className="singleRocket__stat">
                    <p>COST PER LAUNCH</p>
                    <p>$ {data.rocket.cost_per_launch}</p>
                </div>
                <div className="singleRocket__stat">
                    <p>FIRST FLIGHT</p>
                    <p>{data.rocket.first_flight}</p>
                </div>
            </div>
            <div className="singleRocket__engines">
                <h3>ENGINES</h3>
                <div className="singleRocket__stat">
                    <p>Type</p>
                    <p>{data.rocket.engines.type}</p>
                </div>
                <div className="singleRocket__stat">
                    <p>PROPELLANT 1</p>
                    <p>{data.rocket.engines.propellant_1}</p>
                </div>
                <div className="singleRocket__stat">
                    <p>PROPELLANT 2</p>
                    <p>{data.rocket.engines.propellant_2}</p>
                </div>
                <div className="singleRocket__stat">
                    <p>LAYOUT</p>
                    <p>{data.rocket.engines.layout}</p>
                </div>
            </div>
        </div>
    );
};

export default RocketInfo;
