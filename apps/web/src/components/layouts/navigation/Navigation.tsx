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
    <nav className="flex items-center gap-6">
      {navItems.map((item) => (
        <NavigationItem
          key={item.id}
          title={item.title}
          href={item.href}
        />
      ))}
    </nav>
  );
}

export default Navigation;
