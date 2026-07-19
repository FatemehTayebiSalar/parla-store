import { Heart } from "lucide-react";
import { IconButton } from "../../ui/icon-button";
function WishlistButton() {
  return (
    <IconButton>
      <Heart size={20} strokeWidth={2}/>
    </IconButton>
  );
}

export default WishlistButton;