import "./Rockets.css";
import DisplayRocket from "../../components/DisplayRocket/DisplayRocket";

const Rockets = () => {
    return (
        <main className="rockets">
            <DisplayRocket
                name="FALCON 9"
                desc="FIRST ORBITAL CLASS ROCKET CAPABLE OF REFLIGHT"
                bgImage="https://www.spacex.com/static/images/backgrounds/f9_feature.webp"
            />
            <DisplayRocket
                name="FALCON HEAVY"
                desc="THE WORLD'S MOST POWERFUL ROCKET"
                bgImage="https://www.spacex.com/static/images/backgrounds/fh_feature.webp"
            />
            <DisplayRocket
                name="STARSHIP"
                desc="FULLY REUSABLE TRANSPORTATION SYSTEM"
                bgImage="https://www.spacex.com/static/images/starship/refresh/STARSHIP_CREW_3840x2160.webp"
            />
        </main>
    );
};

export default Rockets;
