import { Link } from "react-router-dom";

import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <h1>
                SpaceX <RocketLaunchIcon />
            </h1>
            <ul className="header__menu">
                <Link to="/">
                    <li className="header__item">Launches</li>
                </Link>
                <Link to="/rockets">
                    <li className="header__item">Rockets</li>
                </Link>
            </ul>
        </header>
    );
};

export default Header;
