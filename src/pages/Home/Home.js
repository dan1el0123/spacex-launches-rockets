import { useQuery, gql } from "@apollo/client";

import "./Home.css";
import Loading from "../../components/Loader/Loading";
import DisplayLaunches from "../../components/DisplayLaunches/DisplayLaunches";

// query for previus launches
const GET_PAST_LAUNCHES = gql`
    {
        launchesPast(limit: 20) {
            mission_name
            launch_site {
                site_name_long
            }
            rocket {
                rocket_name
                rocket {
                    id
                }
            }
            id
            details
            links {
                flickr_images
                mission_patch
            }
            launch_year
        }
    }
`;

const Home = () => {
    const { loading, error, data } = useQuery(GET_PAST_LAUNCHES);

    if (loading) return <Loading />;
    if (error) return <p>Error :{error.message}</p>;

    return (
        <main className="launches">
            {data.launchesPast
                .filter((item) => item.links.flickr_images[0])
                .map((launch) => (
                    <DisplayLaunches key={launch.id} launch={launch} />
                ))}
        </main>
    );
};

export default Home;
