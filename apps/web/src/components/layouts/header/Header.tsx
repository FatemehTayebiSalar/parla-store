import HeaderActions from "./HeaderActions";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Navigation from "../navigation";
import Container from "../../common/Container";

function Header() {
  return (
    <header className="border-b border-gray-100 bg-white shadow-sm px-8">
      <Container>
        <div className="grid h-20 grid-cols-3 items-center">
          <div className="flex justify-start">
            <Logo />
          </div>

          <div className="flex justify-center">
            <Navigation />
          </div>

          <div className="flex justify-end">
            <HeaderActions />
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;