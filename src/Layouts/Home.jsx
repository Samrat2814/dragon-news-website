import Header from "../Components/Header";
import LatestMarque from "../Components/LatestMarque";
import LeftNavbar from "../Components/Layout-Component/LeftNavbar";
import MainNav from "../Components/Layout-Component/MainNav";
import RightNav from "../Components/Layout-Component/RightNav";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <div className="font-poppins">
      <Header />
      <section className="w-11/12 mx-auto">
        <LatestMarque />
      </section>
      <nav className="w-11/12 mx-auto mt-6">
        <Navbar />
      </nav>
      <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
        <aside className="col-span-3"><LeftNavbar/></aside>
        <section className="col-span-6"><MainNav/></section>
        <aside className="col-span-3"><RightNav/></aside>
      </main>
    </div>
  );
};

export default Home;
