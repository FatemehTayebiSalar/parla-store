import HeaderActions from "./HeaderActions"
import Logo from "./Logo"
import SearchBar from "./SearchBar"
import Navigation from "../navigation";
function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <HeaderActions />
        <SearchBar />
        <Logo />
      </div>
      <Navigation />
      
    </header>
  );
}

export default Header;