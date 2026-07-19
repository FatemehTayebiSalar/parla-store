import NavigationItem from "./NavigationItem";

type NavigationItemType = {
  id: number;
  title: string;
  href: string;
};

const navItems: NavigationItemType[] = [
  {
    id: 1,
    title: "خانه",
    href: "/",
  },
  {
    id: 2,
    title: "محصولات",
    href: "/products",
  },
  {
    id: 3,
    title: "برندها",
    href: "/brands",
  },
  {
    id: 4,
    title: "تخفیف‌ها",
    href: "/offers",
  },
  {
    id: 5,
    title: "تماس با ما",
    href: "/contact",
  },
];

function Navigation() {
  return (
    <nav>
      <ul className="flex flex-row-reverse items-center gap-8">
        {navItems.map((item) => (
          <li key={item.id}>
            <NavigationItem
              title={item.title}
              href={item.href}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;