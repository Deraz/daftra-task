import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <Sidebar>{children}</Sidebar>
    </>
  );
};

export default Layout;
