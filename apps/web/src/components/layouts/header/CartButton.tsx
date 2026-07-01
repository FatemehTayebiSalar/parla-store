import { ShoppingCart } from "lucide-react";
import { IconButton } from "../../ui/icon-button";
function CartButton() {
  return (
    <IconButton>
      <ShoppingCart size={22} />
    </IconButton>
  );
}

export default CartButton;