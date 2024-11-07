import { Navbar } from "../components/Elements/NavigationBar";
import Banner from "../components/Elements/Banner";
import Movie from "../components/Elements/Movie";
import Footer from "../components/Elements/Footer";

const HomePage = () => {
  return (
    <div className="h-screen bg-background overflow-auto md:overflow-auto">
      <Navbar />
      <Banner />
      <Movie />
      <Footer />
    </div>
  );
};

export default HomePage;
