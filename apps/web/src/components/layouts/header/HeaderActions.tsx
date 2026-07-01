import CartButton from "./CartButton";
import UserButton from "./UserButton";
import WishlistButton from "./WishlistButton";

function HeaderActions(){
    return (
        <div className="flex items-center gap-4"> 
            <WishlistButton />
            <CartButton />
            <UserButton />
        </div>
    );
}

export default HeaderActions;