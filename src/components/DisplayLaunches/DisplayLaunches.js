import FoundationIcon from "@mui/icons-material/Foundation";
import RocketIcon from "@mui/icons-material/Rocket";

import "./DisplayLaunches.css";

const DisplayLaunches = ({ launch }) => {
    const { mission_name, launch_year, launch_site, rocket, links } = launch;

    return (
        <article className="launchesItem">
            <div className="launchesItem__year">{launch_year}</div>
            <div className="launchesItem__patch">
                {links.mission_patch && (
                    <img
                        src={links.mission_patch}
                        alt="mission patch"
                        title="mission patch"
                    />
                )}
            </div>
            <div className="launchesItem__img">
                <img alt={mission_name} src={`${links.flickr_images[0]}`} />
            </div>
            <h3>{mission_name}</h3>
            {/* <p>Launch site:</p> */}
            <div className="launchesItem__detail">
                <FoundationIcon />
                <p>{launch_site.site_name_long}</p>
            </div>
            <div className="launchesItem__detail">
                <RocketIcon />
                <p>{rocket.rocket_name.toUpperCase()}</p>
            </div>
        </article>
    );
};

export default DisplayLaunches;
