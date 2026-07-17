import { NavLink } from "react-router-dom";

type NavigationItemProps = {
  title: string;
  href: string;
};

function NavigationItem({title, href}: NavigationItemProps){
    return (
        <NavLink
            to = {href}
            className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                    isActive
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700 hover:text-blue-600"
                }`
            }
        >
            {title}
        </NavLink>
        
    )
}


export default NavigationItem;