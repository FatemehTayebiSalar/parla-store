import HeaderActions from "./HeaderActions";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Navigation from "../navigation";
import Container from "../../common/Container";

function Header() {
  return (
    <header className="border-b bg-white">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <HeaderActions />
          <SearchBar />
          <Logo />
        </div>
      </Container>

      <Navigation />
    </header>
  );
}

export default Header;