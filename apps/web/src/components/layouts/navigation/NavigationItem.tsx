type NavigationItemProps = {
  title: string;
  href: string;
};

function NavigationItem({title, href}: NavigationItemProps){
    console.log({ title, href });
    return (
        <a
            href = {href}
            className="text-sm font-medium text-gray-700 transition-colors hover:text-b"
        >
            {title}
        </a>
        
    )
}


export default NavigationItem;