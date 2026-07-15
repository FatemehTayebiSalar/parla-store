import { Link } from "react-router-dom";

type NavigationItemProps = {
  title: string;
  href: string;
};

function NavigationItem({title, href}: NavigationItemProps){
    console.log({ title, href });
    return (
        <Link
            to = {href}
            className="text-sm font-medium text-gray-700 transition-colors hover:text-b"
        >
            {title}
        </Link>
        
    )
}


export default NavigationItem;