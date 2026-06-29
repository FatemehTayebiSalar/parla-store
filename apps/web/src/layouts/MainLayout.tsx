import Header from "../components/layout/header";
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