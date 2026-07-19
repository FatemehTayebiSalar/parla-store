import { Link } from "react-router-dom";
import logo from "../../../assets/images/Logo.png";

function Logo() {
  return (
    <Link to="/" aria-label="Parla Store Home" className="flex items-center">
      <img
        src={logo}
        alt="Parla Store Logo"
        className="h-20 w-auto object-contain"
      />
    </Link>
  );
}

export default Logo;