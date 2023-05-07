import { Topbar } from "./Topbar";
import { Navbar } from "./Navbar";
import { Searchbtn } from "./Searchbtn";
import { Carousel } from "./Carousel";
import { Banner } from "./Banner";
import { About } from "./About";
import { Appointment } from "./Appointment";
import { Service } from "./Service";
import { Offer } from "./Offer";

function Home() {
  return (
    <div className="Home">
      <Topbar />
      <Navbar />
      <Searchbtn />
      <Carousel />
      <Banner />
      <About />
      <Appointment />
      <Service />
    </div>
  );
}
export default Home;
