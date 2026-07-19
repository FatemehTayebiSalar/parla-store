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
                `
                relative
                text-[15px]
                font-medium
                text-slate-700
                transition-colors
                duration-200
                hover:text-blue-700
                ${isActive ? "text-blue-700" : ""}
                `
            }
        >
            {title}
        </NavLink>
        
    )
}


export default NavigationItem;