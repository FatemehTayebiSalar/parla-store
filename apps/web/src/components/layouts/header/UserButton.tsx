import { User } from "lucide-react";
import { IconButton } from "../../ui/icon-button";
function UserButton() {
  return (
    <IconButton>
      <User size={20} strokeWidth={2} />
    </IconButton>
  );
}

export default UserButton;