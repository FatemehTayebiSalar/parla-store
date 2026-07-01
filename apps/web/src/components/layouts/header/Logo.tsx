import logo from "../../../assets/images/Logo.png"
function Logo(){
    return (
        <a href="/" aria-label="Parla Store Home">
            <img
                src={logo}
                alt="Parla Store Logo"
                className="h-18 w-auto" 
            />

        </a>
    );
}

export default Logo;