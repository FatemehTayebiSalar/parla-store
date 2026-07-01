import { Header } from "../components/layouts/header";
type MainLayoutProps = {
  children: React.ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
    <Header />
    <main>
        {children}
    </main>
    </>
  );
}

export default MainLayout;